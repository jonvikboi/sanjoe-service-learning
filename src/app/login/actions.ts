"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession, verifyPassword } from "@/lib/auth";
import { getCollection, COLLECTIONS } from "@/lib/db/collections";
import { getRoleDashboardHref } from "@/lib/permissions/rbac";
import { LoginSchema, Role, SessionUser } from "@/lib/validators/auth";

interface LoginActionResult {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
  redirectUrl?: string;
}

// Built-in development demo accounts
const DEMO_ACCOUNTS: Record<string, SessionUser & { password: string }> = {
  "student@sanjoe.edu": {
    id: "demo-student-id",
    name: "Aarav Sharma",
    email: "student@sanjoe.edu",
    password: "password123",
    role: "STUDENT",
    grade: 8,
    section: "A",
  },
  "teacher@sanjoe.edu": {
    id: "demo-teacher-id",
    name: "Mrs. Reena Thomas",
    email: "teacher@sanjoe.edu",
    password: "password123",
    role: "TEACHER",
  },
  "admin@sanjoe.edu": {
    id: "demo-admin-id",
    name: "Sr. Mary Celine",
    email: "admin@sanjoe.edu",
    password: "password123",
    role: "ADMIN",
  },
};

/**
 * Server Action for standard email/password login
 */
export async function loginWithCredentials(
  prevState: unknown,
  formData: FormData
): Promise<LoginActionResult> {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validation = LoginSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      success: false,
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validation.data;

  try {
    let sessionUser: SessionUser | null = null;

    // 1. Try to authenticate against MongoDB users collection
    try {
      const usersCol = await getCollection(COLLECTIONS.USERS);
      const dbUser = await usersCol.findOne({ email });

      if (dbUser && dbUser.passwordHash) {
        const isMatch = await verifyPassword(password, dbUser.passwordHash);
        if (isMatch) {
          sessionUser = {
            id: dbUser._id.toString(),
            email: dbUser.email,
            name: dbUser.name || "User",
            role: dbUser.role as Role,
            grade: dbUser.grade,
            section: dbUser.section,
          };
        }
      }
    } catch {
      // If DB is offline or not configured yet in local dev, allow fallback
    }

    // 2. Check development demo accounts if DB lookup didn't match
    if (!sessionUser && DEMO_ACCOUNTS[email]) {
      const demo = DEMO_ACCOUNTS[email];
      if (demo.password === password) {
        sessionUser = {
          id: demo.id,
          name: demo.name,
          email: demo.email,
          role: demo.role,
          grade: demo.grade,
          section: demo.section,
        };
      }
    }

    if (!sessionUser) {
      return {
        success: false,
        error: "Invalid email or password. Use demo accounts or verify credentials.",
      };
    }

    // 3. Establish secure session cookie
    await createSession(sessionUser);

    return {
      success: true,
      redirectUrl: getRoleDashboardHref(sessionUser.role),
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "An unexpected authentication error occurred.",
    };
  }
}

/**
 * Quick Instant Role Switcher for Development & Testing
 */
export async function quickDemoLogin(role: Role): Promise<{ success: boolean; redirectUrl: string }> {
  const demoEmail =
    role === "STUDENT"
      ? "student@sanjoe.edu"
      : role === "TEACHER"
      ? "teacher@sanjoe.edu"
      : "admin@sanjoe.edu";

  const user = DEMO_ACCOUNTS[demoEmail];
  await createSession({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    grade: user.grade,
    section: user.section,
  });

  return {
    success: true,
    redirectUrl: getRoleDashboardHref(role),
  };
}

/**
 * Server Action for User Logout
 */
export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/login");
}

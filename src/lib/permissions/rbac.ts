import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { Role, SessionUser } from "@/lib/validators/auth";

/**
 * Returns the default dashboard URL for a given role.
 */
export function getRoleDashboardHref(role: Role): string {
  switch (role) {
    case "STUDENT":
      return "/student/dashboard";
    case "TEACHER":
      return "/teacher/dashboard";
    case "ADMIN":
      return "/admin/dashboard";
    default:
      return "/login";
  }
}

/**
 * Checks if a session user possesses a specific role.
 */
export function hasRole(user: SessionUser | null, role: Role): boolean {
  return user?.role === role;
}

/**
 * Enforces that a request is authenticated.
 * Redirects to /login if no valid session exists.
 */
export async function requireAuth(): Promise<SessionUser> {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}

/**
 * Enforces that a user has one of the allowed roles.
 * If logged in with the wrong role, redirects to their authorized dashboard.
 */
export async function requireRole(allowedRoles: Role[]): Promise<SessionUser> {
  const session = await requireAuth();

  if (!allowedRoles.includes(session.role)) {
    redirect(getRoleDashboardHref(session.role));
  }

  return session;
}

/**
 * Enforces STUDENT role.
 */
export async function requireStudent(): Promise<SessionUser> {
  return requireRole(["STUDENT"]);
}

/**
 * Enforces TEACHER role.
 */
export async function requireTeacher(): Promise<SessionUser> {
  return requireRole(["TEACHER"]);
}

/**
 * Enforces ADMIN role.
 */
export async function requireAdmin(): Promise<SessionUser> {
  return requireRole(["ADMIN"]);
}

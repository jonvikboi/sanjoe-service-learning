import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { SessionUser, SessionUserSchema } from "@/lib/validators/auth";

const SESSION_COOKIE_NAME = "sadanlearn_session";
const SESSION_DURATION = 60 * 60 * 24 * 7; // 7 days in seconds

// Secret key for JWT signing
const secretKey = process.env.AUTH_SECRET || process.env.JWT_SECRET || "sadanlearn-dev-insecure-secret-key-32chars";
const encodedKey = new TextEncoder().encode(secretKey);

/* -------------------------------------------------------------------------- */
/*                          Password Hashing Helpers                          */
/* -------------------------------------------------------------------------- */

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/* -------------------------------------------------------------------------- */
/*                         JWT Token Signing & Verify                         */
/* -------------------------------------------------------------------------- */

export async function signSessionToken(payload: SessionUser): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(encodedKey);
}

export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    const parsed = SessionUserSchema.safeParse(payload);
    if (!parsed.success) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/*                        Cookie-based Session Helpers                        */
/* -------------------------------------------------------------------------- */

/**
 * Creates and sets an encrypted HTTP-only session cookie.
 */
export async function createSession(user: SessionUser): Promise<string> {
  const token = await signSessionToken(user);
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION,
  });

  return token;
}

/**
 * Retrieves and validates the current user session from cookies.
 */
export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  return verifySessionToken(token);
}

/**
 * Destroys the current user session by clearing the cookie.
 */
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export { SESSION_COOKIE_NAME };

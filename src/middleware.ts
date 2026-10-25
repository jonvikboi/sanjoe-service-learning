import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE_NAME = "sadanlearn_session";
const secretKey = process.env.AUTH_SECRET || process.env.JWT_SECRET || "sadanlearn-dev-insecure-secret-key-32chars";
const encodedKey = new TextEncoder().encode(secretKey);

interface TokenPayload {
  role: "STUDENT" | "TEACHER" | "ADMIN";
  [key: string]: unknown;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  let session: TokenPayload | null = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, encodedKey, {
        algorithms: ["HS256"],
      });
      session = payload as unknown as TokenPayload;
    } catch {
      session = null;
    }
  }

  const isStudentRoute = pathname.startsWith("/student");
  const isTeacherRoute = pathname.startsWith("/teacher");
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/login";

  // 1. If accessing login while already authenticated, redirect to role dashboard
  if (isLoginRoute && session) {
    const target =
      session.role === "STUDENT"
        ? "/student/dashboard"
        : session.role === "TEACHER"
        ? "/teacher/dashboard"
        : "/admin/dashboard";
    return NextResponse.redirect(new URL(target, request.url));
  }

  // 2. Protect role-based routes
  if (isStudentRoute || isTeacherRoute || isAdminRoute) {
    if (!session) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Role-based access enforcement
    if (isStudentRoute && session.role !== "STUDENT") {
      const target = session.role === "TEACHER" ? "/teacher/dashboard" : "/admin/dashboard";
      return NextResponse.redirect(new URL(target, request.url));
    }

    if (isTeacherRoute && session.role !== "TEACHER") {
      const target = session.role === "STUDENT" ? "/student/dashboard" : "/admin/dashboard";
      return NextResponse.redirect(new URL(target, request.url));
    }

    if (isAdminRoute && session.role !== "ADMIN") {
      const target = session.role === "STUDENT" ? "/student/dashboard" : "/teacher/dashboard";
      return NextResponse.redirect(new URL(target, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/teacher/:path*", "/admin/:path*", "/login"],
};

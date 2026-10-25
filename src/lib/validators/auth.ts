import { z } from "zod";

/**
 * Standard User Roles for SadanLearn
 */
export const RoleEnum = z.enum(["STUDENT", "TEACHER", "ADMIN"]);
export type Role = z.infer<typeof RoleEnum>;

/**
 * Login credentials validation
 */
export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email or Identifier is required")
    .email("Please provide a valid email address")
    .toLowerCase(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password exceeds maximum length"),
});
export type LoginInput = z.infer<typeof LoginSchema>;

/**
 * User registration validation
 */
export const RegisterSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Valid email required").toLowerCase(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: RoleEnum.default("STUDENT"),
  grade: z.number().int().min(6).max(10).optional(),
  section: z.string().trim().max(5).optional(),
});
export type RegisterInput = z.infer<typeof RegisterSchema>;

/**
 * Authenticated Session payload
 */
export const SessionUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: RoleEnum,
  grade: z.number().int().optional(),
  section: z.string().optional(),
  avatarUrl: z.string().optional(),
});
export type SessionUser = z.infer<typeof SessionUserSchema>;

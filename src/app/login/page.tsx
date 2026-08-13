"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Lock,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RoleSwitcherBanner } from "@/components/shared/role-switcher-banner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole] = useState<"STUDENT" | "TEACHER" | "ADMIN">("STUDENT");
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoLogin = (role: "STUDENT" | "TEACHER" | "ADMIN") => {
    setIsLoading(true);
    if (role === "STUDENT") {
      router.push("/student/dashboard");
    } else if (role === "TEACHER") {
      router.push("/teacher/dashboard");
    } else {
      router.push("/admin/dashboard");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // In dev / initial foundation mode, route based on selected demo role
    handleDemoLogin(selectedRole);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F3]">
      <RoleSwitcherBanner />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#12324D] hover:text-[#C75A4B] mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to School Website</span>
          </Link>

          {/* Login Card */}
          <div className="rounded-3xl border border-[#E6D9D4] bg-white p-6 sm:p-10 shadow-[0_16px_40px_rgba(18,50,77,0.08)]">
            {/* Header */}
            <div className="text-center space-y-2 pb-6 border-b border-[#E6D9D4]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12324D] text-white font-bold text-xl mb-1 shadow-sm">
                SS
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#12324D] tracking-tight">
                Sign in to SadanLearn
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Sanjoe Sadan Convent School Portal
              </p>
            </div>

            {/* Quick Demo Role Selector */}
            <div className="mt-6 rounded-2xl bg-[#FAF7F3] p-4 border border-[#E6D9D4]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12324D] flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#C75A4B]" />
                  <span>Instant Demo Access</span>
                </span>
                <Badge variant="terracotta" size="sm">
                  Dev Mode
                </Badge>
              </div>
              <p className="text-xs text-[#64748B] mb-3">
                Select a role to preview the authenticated dashboard immediately:
              </p>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin("STUDENT")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#E6D9D4] bg-white hover:border-[#C75A4B] hover:bg-[#F8DDD9]/50 transition-all text-center group cursor-pointer"
                >
                  <GraduationCap className="h-5 w-5 text-[#C75A4B] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#12324D]">Student</span>
                  <span className="text-[10px] text-[#64748B]">Class 8A</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDemoLogin("TEACHER")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#E6D9D4] bg-white hover:border-[#C75A4B] hover:bg-[#F8DDD9]/50 transition-all text-center group cursor-pointer"
                >
                  <Users className="h-5 w-5 text-[#2C5D7D] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#12324D]">Teacher</span>
                  <span className="text-[10px] text-[#64748B]">Faculty</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDemoLogin("ADMIN")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#E6D9D4] bg-white hover:border-[#C75A4B] hover:bg-[#F8DDD9]/50 transition-all text-center group cursor-pointer"
                >
                  <ShieldCheck className="h-5 w-5 text-[#12324D] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#12324D]">Admin</span>
                  <span className="text-[10px] text-[#64748B]">Coordinator</span>
                </button>
              </div>
            </div>

            {/* Standard Credentials Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-[#12324D]"
                >
                  School Email / ID
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. student@sadanlearn.local"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="h-4 w-4" />}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold text-[#12324D]"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Lock className="h-4 w-4" />}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center shadow-md"
                  disabled={isLoading}
                >
                  <span>{isLoading ? "Signing in..." : "Continue to Dashboard"}</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            </form>

            {/* Notice */}
            <div className="mt-6 pt-4 border-t border-[#FAF7F3] text-center text-xs text-[#94A3B8]">
              <span>Need account access? Please contact the school office.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

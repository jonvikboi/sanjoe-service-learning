"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, GraduationCap, Users, ShieldAlert, Home, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

export function RoleSwitcherBanner() {
  const pathname = usePathname();

  return (
    <aside aria-label="Development Role Switcher" className="w-full bg-[#12324D] text-[#FAF7F3] text-xs border-b border-[#1D4366] px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 z-50">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 font-semibold text-[#F4C7C3]">
          <Sparkles className="h-3.5 w-3.5 text-[#E7A69B]" />
          <span>SadanLearn Dev Preview</span>
        </span>
        <span className="hidden sm:inline text-[#6F91A6]">|</span>
        <span className="hidden md:inline text-[#A9B3CE]">
          Quick switch roles or preview public site:
        </span>
      </div>

      <nav aria-label="Role preview navigation" className="flex items-center gap-1.5 overflow-x-auto py-0.5">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors",
            pathname === "/"
              ? "bg-[#C75A4B] text-white font-medium"
              : "text-[#FAF7F3]/80 hover:bg-[#1D4366] hover:text-white"
          )}
        >
          <Home className="h-3 w-3" />
          <span>School Website</span>
        </Link>

        <Link
          href="/student/dashboard"
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors",
            pathname.startsWith("/student")
              ? "bg-[#C75A4B] text-white font-medium"
              : "text-[#FAF7F3]/80 hover:bg-[#1D4366] hover:text-white"
          )}
        >
          <GraduationCap className="h-3 w-3" />
          <span>Student View</span>
        </Link>

        <Link
          href="/teacher/dashboard"
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors",
            pathname.startsWith("/teacher")
              ? "bg-[#C75A4B] text-white font-medium"
              : "text-[#FAF7F3]/80 hover:bg-[#1D4366] hover:text-white"
          )}
        >
          <Users className="h-3 w-3" />
          <span>Teacher View</span>
        </Link>

        <Link
          href="/admin/dashboard"
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors",
            pathname.startsWith("/admin")
              ? "bg-[#C75A4B] text-white font-medium"
              : "text-[#FAF7F3]/80 hover:bg-[#1D4366] hover:text-white"
          )}
        >
          <ShieldAlert className="h-3 w-3" />
          <span>Admin View</span>
        </Link>

        <Link
          href="/login"
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors",
            pathname === "/login"
              ? "bg-[#C75A4B] text-white font-medium"
              : "text-[#FAF7F3]/80 hover:bg-[#1D4366] hover:text-white"
          )}
        >
          <LogIn className="h-3 w-3" />
          <span>Auth Portal</span>
        </Link>
      </nav>
    </aside>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Bell,
  Calendar,
  Sparkles,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { UserProfile } from "@/types";
import { Badge } from "@/components/ui/badge";

interface LmsTopbarProps {
  user: UserProfile;
  onMenuClick?: () => void;
}

export function LmsTopbar({ user, onMenuClick }: LmsTopbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);

  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date());

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-[#E6D9D4] bg-white/95 px-4 sm:px-8 backdrop-blur-md">
      <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
        {/* Mobile menu trigger */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-[#12324D] hover:bg-[#F8DDD9]/50 border border-[#E6D9D4]"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Global Search */}
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search notes, homework, subjects..."
            className="h-10 w-full rounded-xl border border-[#E6D9D4] bg-[#FAF7F3] pl-10 pr-4 text-xs sm:text-sm text-[#1F2328] placeholder:text-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#C75A4B] focus:ring-2 focus:ring-[#C75A4B]/20 transition-all"
          />
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Date Display */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#12324D] bg-[#FAF7F3] px-3 py-1.5 rounded-xl border border-[#E6D9D4]">
          <Calendar className="h-3.5 w-3.5 text-[#C75A4B]" />
          <span>{currentDate}</span>
        </div>

        {/* Notification Bell */}
        <button
          className="relative p-2 rounded-xl text-[#12324D] hover:bg-[#FAF7F3] border border-[#E6D9D4] transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#C75A4B]" />
        </button>

        {/* User Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 p-1.5 sm:pr-3 rounded-xl border border-[#E6D9D4] hover:bg-[#FAF7F3] transition-colors text-left"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8DDD9] text-[#C75A4B] font-bold text-sm overflow-hidden border border-[#E7A69B]">
              {user.name.charAt(0)}
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-[#12324D] line-clamp-1 max-w-[130px]">
                {user.name}
              </span>
              <span className="text-[11px] text-[#64748B]">
                {user.role === "STUDENT"
                  ? user.grade || "Student"
                  : user.role === "TEACHER"
                  ? "Faculty"
                  : "Administrator"}
              </span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-[#64748B] hidden sm:block" />
          </button>

          {/* Dropdown Menu */}
          {profileOpen && (
            <div
              className="absolute right-0 mt-2 w-56 rounded-2xl border border-[#E6D9D4] bg-white p-2 shadow-xl z-50 animate-fade-in"
              onMouseLeave={() => setProfileOpen(false)}
            >
              <div className="p-3 border-b border-[#FAF7F3]">
                <p className="text-xs font-bold text-[#12324D]">{user.name}</p>
                <p className="text-[11px] text-[#64748B] truncate">{user.email}</p>
                <Badge variant="terracotta" size="sm" className="mt-2">
                  Role: {user.role}
                </Badge>
              </div>

              <div className="py-1">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#12324D] hover:bg-[#FAF7F3] rounded-lg transition-colors"
                  onClick={() => setProfileOpen(false)}
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#C75A4B]" />
                  <span>Public School Website</span>
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#C62828] hover:bg-rose-50 rounded-lg transition-colors"
                  onClick={() => setProfileOpen(false)}
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Sign Out / Switch</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

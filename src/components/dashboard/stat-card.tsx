import * as React from "react";
import {
  ClipboardList,
  BookOpen,
  Flame,
  GraduationCap,
  FileCheck2,
  Users,
  School,
  Library,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardStat } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  BookOpen,
  Flame,
  GraduationCap,
  FileCheck2,
  Users,
  School,
  Library,
  TrendingUp,
};

interface StatCardProps extends DashboardStat {
  className?: string;
}

export function StatCard({
  label,
  value,
  subtext,
  iconName,
  accentColor = "terracotta",
  className,
}: StatCardProps) {
  const Icon = iconMap[iconName] || BookOpen;

  const accentStyles = {
    terracotta: {
      iconBg: "bg-[#F8DDD9]",
      iconColor: "text-[#C75A4B]",
      border: "border-l-4 border-l-[#C75A4B]",
    },
    navy: {
      iconBg: "bg-[#12324D]/10",
      iconColor: "text-[#12324D]",
      border: "border-l-4 border-l-[#12324D]",
    },
    pink: {
      iconBg: "bg-[#F4C7C3]",
      iconColor: "text-[#12324D]",
      border: "border-l-4 border-l-[#F4C7C3]",
    },
    blue: {
      iconBg: "bg-[#2C5D7D]/15",
      iconColor: "text-[#2C5D7D]",
      border: "border-l-4 border-l-[#2C5D7D]",
    },
    success: {
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
      border: "border-l-4 border-l-emerald-600",
    },
  };

  const currentAccent = accentStyles[accentColor] || accentStyles.terracotta;

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E6D9D4] bg-white p-5 shadow-[0_2px_8px_rgba(18,50,77,0.04)] transition-all duration-200 hover:shadow-[0_6px_16px_rgba(18,50,77,0.08)] hover:border-[#C75A4B]/40",
        currentAccent.border,
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
            {label}
          </p>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#12324D]">
            {value}
          </p>
          {subtext && (
            <p className="mt-1 text-xs text-[#64748B] line-clamp-1">{subtext}</p>
          )}
        </div>
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
            currentAccent.iconBg,
            currentAccent.iconColor
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

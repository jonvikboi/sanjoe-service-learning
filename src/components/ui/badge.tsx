import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "terracotta"
    | "navy"
    | "pink"
    | "blue"
    | "success"
    | "warning"
    | "outline";
  size?: "sm" | "md";
}

function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-[#F8DDD9] text-[#12324D] border-transparent",
    terracotta: "bg-[#C75A4B]/15 text-[#C75A4B] border-[#C75A4B]/20 font-semibold",
    navy: "bg-[#12324D] text-white border-transparent",
    pink: "bg-[#F4C7C3] text-[#12324D] border-[#E7A69B]",
    blue: "bg-[#2C5D7D]/15 text-[#2C5D7D] border-[#2C5D7D]/20",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200 font-medium",
    warning: "bg-amber-50 text-amber-700 border-amber-200 font-medium",
    outline: "border border-[#E6D9D4] text-[#12324D] bg-white",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs rounded-md",
    md: "px-2.5 py-1 text-xs rounded-lg font-medium",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors border select-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

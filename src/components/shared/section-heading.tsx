import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "terracotta" | "navy" | "pink" | "blue";
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  useSerif?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  badge,
  badgeVariant = "terracotta",
  title,
  description,
  align = "left",
  useSerif = false,
  className,
  children,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-10 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} className="mb-3">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#12324D] leading-tight",
          useSerif ? "font-serif font-normal" : "font-sans"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
      {children && <div className="mt-6 flex flex-wrap gap-4">{children}</div>}
    </div>
  );
}

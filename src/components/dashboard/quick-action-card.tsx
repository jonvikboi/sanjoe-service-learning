import Link from "next/link";
import {
  FileUp,
  PlusCircle,
  Megaphone,
  CheckCircle2,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const quickActionIcons: Record<string, LucideIcon> = {
  FileUp,
  PlusCircle,
  Megaphone,
  CheckCircle2,
};

interface QuickActionProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  colorVariant?: "terracotta" | "navy" | "blue" | "pink";
}

export function QuickActionCard({
  title,
  description,
  iconName,
  href,
  colorVariant = "terracotta",
}: QuickActionProps) {
  const Icon = quickActionIcons[iconName] || PlusCircle;

  const colorStyles = {
    terracotta: "hover:border-[#C75A4B] text-[#C75A4B] bg-[#F8DDD9]/40",
    navy: "hover:border-[#12324D] text-[#12324D] bg-[#12324D]/5",
    blue: "hover:border-[#2C5D7D] text-[#2C5D7D] bg-[#2C5D7D]/10",
    pink: "hover:border-[#F4C7C3] text-[#12324D] bg-[#F4C7C3]/30",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-start gap-4 rounded-2xl border border-[#E6D9D4] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        colorStyles[colorVariant]
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-[#E6D9D4] group-hover:scale-105 transition-transform">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-base text-[#12324D] group-hover:text-[#C75A4B] transition-colors">
            {title}
          </h4>
          <ArrowRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#C75A4B] group-hover:translate-x-1 transition-all" />
        </div>
        <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}

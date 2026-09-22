import Link from "next/link";
import { LucideIcon, ArrowLeft, Construction, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ModulePlaceholderProps {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  backHref: string;
  backLabel?: string;
  teamModuleOwner?: string;
  features: string[];
}

export function ModulePlaceholder({
  title,
  category,
  description,
  icon: Icon,
  backHref,
  backLabel = "Back to Dashboard",
  teamModuleOwner = "Assigned Team Member",
  features,
}: ModulePlaceholderProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back button */}
      <div>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#12324D] hover:text-[#C75A4B] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* Main Header Card */}
      <div className="rounded-3xl border border-[#E6D9D4] bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(18,50,77,0.04)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FAF7F3]">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F8DDD9] text-[#C75A4B]">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="terracotta" size="sm">
                  {category}
                </Badge>
                <Badge variant="outline" size="sm" className="bg-[#FAF7F3]">
                  Handoff: {teamModuleOwner}
                </Badge>
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-[#12324D]">
                {title}
              </h1>
              <p className="mt-1 text-sm text-[#64748B] max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Scope Specifications */}
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#12324D] mb-3 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#C75A4B]" />
            <span>Planned Module Capabilities & Implementation Checklist</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E6D9D4] bg-[#FAF7F3]/70 text-xs font-medium text-[#12324D]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C75A4B] text-white text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span className="line-clamp-2">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Handoff Notice */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FFFDF9] border border-dashed border-[#E6D9D4] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <Construction className="h-4 w-4 text-[#C75A4B]" />
            <span>
              Route structure and visual shell established. Real MongoDB integration hook ready.
            </span>
          </div>
          <Link href={backHref}>
            <Button size="sm" variant="outline" className="bg-white">
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

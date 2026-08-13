import Link from "next/link";
import {
  Calculator,
  FlaskConical,
  BookOpenText,
  Languages,
  Globe2,
  Landmark,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { SubjectItem } from "@/types";
import { cn } from "@/lib/utils";

const subjectIconMap: Record<string, LucideIcon> = {
  Calculator,
  FlaskConical,
  BookOpenText,
  Languages,
  Globe2,
  Landmark,
};

interface SubjectCardProps {
  subject: SubjectItem;
  className?: string;
}

export function SubjectCard({ subject, className }: SubjectCardProps) {
  const Icon = subjectIconMap[subject.iconName] || BookOpenText;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-[#E6D9D4] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C75A4B]/50 hover:shadow-[0_8px_20px_rgba(18,50,77,0.06)]",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
            style={{ backgroundColor: `${subject.color}18`, color: subject.color }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold text-[#64748B] bg-[#FAF7F3] px-2.5 py-1 rounded-lg border border-[#E6D9D4]/60">
            {subject.code}
          </span>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-lg text-[#12324D] group-hover:text-[#C75A4B] transition-colors">
            {subject.name}
          </h4>
          {subject.teacherName && (
            <p className="mt-1 text-xs text-[#64748B]">
              Faculty: {subject.teacherName}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[#FAF7F3] flex items-center justify-between">
        <span className="text-xs font-medium text-[#2C5D7D]">
          {subject.resourcesCount} Learning Notes
        </span>
        <Link
          href={`/student/notes?subject=${encodeURIComponent(subject.name)}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#C75A4B] hover:text-[#A9473A] transition-colors"
        >
          <span>Open</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

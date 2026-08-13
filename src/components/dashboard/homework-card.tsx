import { Clock, Paperclip } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HomeworkItem } from "@/types";
import { cn } from "@/lib/utils";

interface HomeworkCardProps {
  homework: HomeworkItem;
  className?: string;
}

export function HomeworkCard({ homework, className }: HomeworkCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#E6D9D4] bg-white p-4 transition-all duration-200 hover:border-[#C75A4B]/40 hover:shadow-sm",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2C5D7D]">
          {homework.subject}
        </span>
        <Badge
          variant={
            homework.status === "SUBMITTED"
              ? "success"
              : homework.status === "REVIEWED"
              ? "blue"
              : "terracotta"
          }
          size="sm"
        >
          {homework.status || "Pending"}
        </Badge>
      </div>

      <h4 className="mt-2 font-semibold text-sm text-[#12324D] leading-snug line-clamp-2">
        {homework.title}
      </h4>

      <p className="mt-1.5 text-xs text-[#64748B] line-clamp-2 leading-relaxed">
        {homework.instructions}
      </p>

      <div className="mt-3 pt-3 border-t border-[#FAF7F3] flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-[#C75A4B] font-medium">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          <span className="line-clamp-1">{homework.dueDate}</span>
        </div>

        {homework.hasAttachment && (
          <span className="flex items-center gap-0.5 text-[#64748B]">
            <Paperclip className="h-3 w-3" />
            <span>File</span>
          </span>
        )}
      </div>
    </div>
  );
}

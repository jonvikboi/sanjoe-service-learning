import { FileText, Download, User } from "lucide-react";
import { NoteItem } from "@/types";
import { cn } from "@/lib/utils";

interface RecentNoteCardProps {
  note: NoteItem;
  className?: string;
}

export function RecentNoteCard({ note, className }: RecentNoteCardProps) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 rounded-xl border border-[#E6D9D4] bg-white p-4 transition-all duration-200 hover:border-[#2C5D7D]/40 hover:shadow-sm",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EBF2F7] text-[#2C5D7D]">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C75A4B]">
              {note.subject}
            </span>
            <span className="text-xs text-[#94A3B8]">•</span>
            <span className="text-xs text-[#64748B]">{note.chapter}</span>
          </div>
          <h4 className="mt-1 font-semibold text-sm text-[#12324D] leading-snug">
            {note.title}
          </h4>
          <div className="mt-1.5 flex items-center gap-3 text-xs text-[#64748B]">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {note.teacherName}
            </span>
            <span>•</span>
            <span>{note.fileSize}</span>
          </div>
        </div>
      </div>

      <button
        aria-label={`Download note: ${note.title}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E6D9D4] text-[#12324D] hover:bg-[#F8DDD9] hover:text-[#C75A4B] hover:border-[#C75A4B] transition-colors"
        title="Download PDF"
      >
        <Download className="h-4 w-4" />
      </button>
    </div>
  );
}

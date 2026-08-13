import { BookOpen } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { RecentNoteCard } from "@/components/dashboard/recent-note-card";
import { STUDENT_RECENT_NOTES } from "@/lib/mock-data/student";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentNotesPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <div className="space-y-6">
        <ModulePlaceholder
          title="Subject Notes & Practice Worksheets"
          category="Academic Repository"
          description="Download teacher-verified chapter revision notes, formula sheets, and PDF worksheets for all your enrolled subjects."
          icon={BookOpen}
          backHref="/student/dashboard"
          features={[
            "Subject-wise chapter filtering (Math, Science, English, etc.)",
            "Direct PDF preview & single-click downloads",
            "Teacher-uploaded formula cheat sheets",
            "Search notes by keyword, chapter, or term",
            "Offline-ready printable PDF formats",
          ]}
        />

        {/* Existing Mock Notes Display */}
        <div className="rounded-3xl border border-[#E6D9D4] bg-white p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#12324D]">
            Available Chapter Notes (Preview)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STUDENT_RECENT_NOTES.map((note) => (
              <RecentNoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayoutShell>
  );
}

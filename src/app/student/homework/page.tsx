import { ClipboardList } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { HomeworkCard } from "@/components/dashboard/homework-card";
import { STUDENT_UPCOMING_HOMEWORK } from "@/lib/mock-data/student";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentHomeworkPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <div className="space-y-6">
        <ModulePlaceholder
          title="Homework & Assignment Submission Hub"
          category="Assignments"
          description="Track active homework assignments, download worksheet instructions, submit your work, and review teacher feedback."
          icon={ClipboardList}
          backHref="/student/dashboard"
          features={[
            "Real-time countdown to submission deadlines",
            "PDF and photo assignment upload interface",
            "Submission receipt confirmation & timestamps",
            "Teacher remarks, corrections & grading visibility",
            "Archived past submissions archive",
          ]}
        />

        <div className="rounded-3xl border border-[#E6D9D4] bg-white p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#12324D]">
            Active Homework Assignments (Preview)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STUDENT_UPCOMING_HOMEWORK.map((hw) => (
              <HomeworkCard key={hw.id} homework={hw} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayoutShell>
  );
}

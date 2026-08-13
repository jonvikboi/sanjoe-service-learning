import { CheckSquare } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_TEACHER } from "@/lib/mock-data/users";

export default function TeacherSubmissionsPage() {
  return (
    <DashboardLayoutShell user={MOCK_TEACHER}>
      <ModulePlaceholder
        title="Student Submission Review & Grading Console"
        category="Faculty Portal"
        description="Review student-submitted homework files, mark completion statuses, and provide constructive feedback."
        icon={CheckSquare}
        backHref="/teacher/dashboard"
        features={[
          "Tabular student submission roster per assignment",
          "One-click student file preview & download",
          "Status marking: PENDING, SUBMITTED, LATE, REVIEWED",
          "Custom teacher remarks and score inputs",
          "Classroom completion percentage overview",
        ]}
      />
    </DashboardLayoutShell>
  );
}

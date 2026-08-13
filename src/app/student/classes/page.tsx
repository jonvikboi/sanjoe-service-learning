import { School } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentClassesPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <ModulePlaceholder
        title="My Enrolled Classes & Subjects"
        category="Student Portal"
        description="View your active classroom timetable, subject faculties, syllabus breakdown, and academic terms."
        icon={School}
        backHref="/student/dashboard"
        features={[
          "Class 8A timetable & daily period schedule",
          "Subject faculty contact & office hours",
          "Syllabus completion tracker per term",
          "Classroom announcements filter",
          "Classmate group project rosters",
        ]}
      />
    </DashboardLayoutShell>
  );
}

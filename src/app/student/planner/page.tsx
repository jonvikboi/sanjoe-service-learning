import { CalendarDays } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentPlannerPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <ModulePlaceholder
        title="Deterministic Study Planner"
        category="Time Management"
        description="Generate intelligent study schedules balancing your exam dates, difficult subjects, and daily available study hours."
        icon={CalendarDays}
        backHref="/student/dashboard"
        features={[
          "Exam date countdown & subject weighting algorithm",
          "Custom daily study hour availability setting",
          "Automated revision session distribution without duplicates",
          "Interactive checklist for completed study blocks",
          "Exportable PDF revision schedule",
        ]}
      />
    </DashboardLayoutShell>
  );
}

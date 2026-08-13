import { Layers } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_TEACHER } from "@/lib/mock-data/users";

export default function TeacherContentPage() {
  return (
    <DashboardLayoutShell user={MOCK_TEACHER}>
      <ModulePlaceholder
        title="Educational Hub Content Publisher"
        category="Faculty Portal"
        description="Contribute learning articles, science trivia, study strategies, and extracurricular discovery materials."
        icon={Layers}
        backHref="/teacher/dashboard"
        features={[
          "Category selector: Science, General Knowledge, Study Tips, Sports, Health",
          "Publishing status controls (Draft, Review, Published)",
          "Age/grade group targeting (Class 6–10)",
          "Attached illustrations and infographics support",
          "Direct moderation workflow with administrator",
        ]}
      />
    </DashboardLayoutShell>
  );
}

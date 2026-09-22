import { Library } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_ADMIN } from "@/lib/mock-data/users";

export default function AdminSubjectsPage() {
  return (
    <DashboardLayoutShell user={MOCK_ADMIN}>
      <ModulePlaceholder
        title="Subjects & State Syllabus Configuration"
        category="Administration"
        description="Define subject curriculum, textbook chapters, subject codes, and color identifiers for each grade."
        icon={Library}
        backHref="/admin/dashboard"
        features={[
          "Curriculum subjects setup: Math, Science, English, Kannada, Hindi, Social",
          "Chapter and unit catalog mapping per grade level",
          "Subject color tokens and visual badge customization",
          "MongoDB Subject model configuration",
          "Cross-subject resource linkage for Learning Hub",
        ]}
      />
    </DashboardLayoutShell>
  );
}

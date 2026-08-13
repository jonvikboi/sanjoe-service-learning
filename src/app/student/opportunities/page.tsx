import { Sparkles } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentOpportunitiesPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <ModulePlaceholder
        title="Career Corner & Verified Opportunities"
        category="Future Pathways"
        description="Discover verified school-level scholarships, STEM Olympiads, essay competitions, and government talent search initiatives."
        icon={Sparkles}
        backHref="/student/dashboard"
        features={[
          "National Means-cum-Merit Scholarship (NMMS) updates",
          "Science & Mathematics Olympiad schedules",
          "Government youth science programs & summer workshops",
          "Secondary school stream exploration (Science, Commerce, Arts)",
          "Direct official government portal application links",
        ]}
      />
    </DashboardLayoutShell>
  );
}

import { School } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_ADMIN } from "@/lib/mock-data/users";

export default function AdminClassesPage() {
  return (
    <DashboardLayoutShell user={MOCK_ADMIN}>
      <ModulePlaceholder
        title="Classroom & Section Configuration"
        category="Administration"
        description="Configure standard grade levels (6 to 10), sections (A, B), classroom teachers, and student capacities."
        icon={School}
        backHref="/admin/dashboard"
        features={[
          "Class creation wizard (Grade 6A to 10B)",
          "Class Teacher designation assignment",
          "Academic year rollover management (2026–2027)",
          "Section capacity limits & active student rosters",
          "Prisma Class model CRUD endpoints",
        ]}
      />
    </DashboardLayoutShell>
  );
}

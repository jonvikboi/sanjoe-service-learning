import { Users } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_ADMIN } from "@/lib/mock-data/users";

export default function AdminTeachersPage() {
  return (
    <DashboardLayoutShell user={MOCK_ADMIN}>
      <ModulePlaceholder
        title="Teaching Faculty & Subject Allocation"
        category="Administration"
        description="Manage teaching staff credentials, assign subject faculties, and configure class teacher duties."
        icon={Users}
        backHref="/admin/dashboard"
        features={[
          "Teacher onboarding & role assignment (TEACHER role in Supabase Auth)",
          "Subject-to-Class allocation matrix (e.g. Mrs. Reena Thomas → Class 8A Math)",
          "Department head designations & permission overrides",
          "Teacher workload & assignment activity logs",
          "Prisma TeacherAssignment model mapping",
        ]}
      />
    </DashboardLayoutShell>
  );
}

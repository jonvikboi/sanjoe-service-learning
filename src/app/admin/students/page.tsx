import { GraduationCap } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_ADMIN } from "@/lib/mock-data/users";

export default function AdminStudentsPage() {
  return (
    <DashboardLayoutShell user={MOCK_ADMIN}>
      <ModulePlaceholder
        title="Student Directory & Enrollment Management"
        category="Administration"
        description="Register students, assign classes & sections, manage roll numbers, and review student platform status."
        icon={GraduationCap}
        backHref="/admin/dashboard"
        features={[
          "Batch student CSV import & student profile creation",
          "Class & Section reassignments across academic years",
          "Password reset & parent guardian linkage controls",
          "Student search by Roll Number, Name, or Grade",
          "Prisma Enrollment model synchronization",
        ]}
      />
    </DashboardLayoutShell>
  );
}

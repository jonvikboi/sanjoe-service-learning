import { ClipboardList } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_TEACHER } from "@/lib/mock-data/users";

export default function TeacherHomeworkPage() {
  return (
    <DashboardLayoutShell user={MOCK_TEACHER}>
      <ModulePlaceholder
        title="Homework Assignment Manager"
        category="Faculty Portal"
        description="Create homework tasks, set submission deadlines, attach problem worksheets, and publish assignments to assigned classes."
        icon={ClipboardList}
        backHref="/teacher/dashboard"
        features={[
          "Interactive homework authoring with Zod schema validation",
          "Due date and time selection with automated student alerts",
          "Optional PDF exercise attachment via Cloud / GridFS Storage",
          "Per-class assignment history & archiving",
          "Direct link to submission review table",
        ]}
      />
    </DashboardLayoutShell>
  );
}

import { BookOpen } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_TEACHER } from "@/lib/mock-data/users";

export default function TeacherNotesPage() {
  return (
    <DashboardLayoutShell user={MOCK_TEACHER}>
      <ModulePlaceholder
        title="Teacher Notes Repository & File Upload"
        category="Faculty Portal"
        description="Upload, organize, and publish chapter revision notes, worksheets, and reference guides for your assigned classes."
        icon={BookOpen}
        backHref="/teacher/dashboard"
        features={[
          "Class & Subject target selector (e.g. Class 8A / Mathematics)",
          "PDF/DOCX validation (enforces 25MB max size limit)",
          "Supabase Storage direct upload integration hook",
          "PostgreSQL Note metadata indexing via Prisma",
          "Student download statistics & access logs",
        ]}
      />
    </DashboardLayoutShell>
  );
}

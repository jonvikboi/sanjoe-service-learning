import { Megaphone } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_TEACHER } from "@/lib/mock-data/users";

export default function TeacherAnnouncementsPage() {
  return (
    <DashboardLayoutShell user={MOCK_TEACHER}>
      <ModulePlaceholder
        title="Classroom & Subject Announcements"
        category="Faculty Portal"
        description="Publish urgent notices, unit test dates, project deadlines, and classroom reminders to your enrolled students."
        icon={Megaphone}
        backHref="/teacher/dashboard"
        features={[
          "Target audience selection (Specific Class, Subject, or All Enrolled)",
          "Priority flags (NORMAL, HIGH, URGENT)",
          "Instant student dashboard notification alert trigger",
          "Rich text formatting for detailed instructions",
          "Announcement expiry and archiving management",
        ]}
      />
    </DashboardLayoutShell>
  );
}

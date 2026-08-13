import { Compass } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentLearningPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <ModulePlaceholder
        title="Curated Learning & Discovery Hub"
        category="Beyond Textbooks"
        description="Broaden horizons with curated science phenomena, sports facts, general knowledge, study tips, and wellness strategies."
        icon={Compass}
        backHref="/student/dashboard"
        features={[
          "Weekly science discoveries & real-world experiments",
          "Effective study habits & memory techniques",
          "Health, nutrition & school sports fundamentals",
          "Interactive mini quizzes & knowledge checks",
          "Teacher-curated recommended books & documentaries",
        ]}
      />
    </DashboardLayoutShell>
  );
}

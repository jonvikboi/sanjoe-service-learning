import { Languages } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentLanguagesPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <ModulePlaceholder
        title="Multilingual Language Lab"
        category="State Curriculum Languages"
        description="Strengthen conversational phrases, vocabulary retention, and grammar rules across English, Kannada (ಕನ್ನಡ), and Hindi (हिन्दी)."
        icon={Languages}
        backHref="/student/dashboard"
        features={[
          "Kannada daily vocabulary & everyday conversations",
          "Hindi grammar drills, antonyms & synonyms",
          "English essay vocabulary & sentence transformation",
          "Flashcard-style rapid revision decks",
          "Self-testing quizzes with instant feedback",
        ]}
      />
    </DashboardLayoutShell>
  );
}

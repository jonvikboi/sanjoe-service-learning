import { Calculator } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_STUDENT } from "@/lib/mock-data/users";

export default function StudentMathPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <ModulePlaceholder
        title="Step-by-Step Math Solver & Concept Assistant"
        category="Mathematics"
        description="Solve algebra, fractions, linear equations, and geometry problems with complete step-by-step reasoning."
        icon={Calculator}
        backHref="/student/dashboard"
        features={[
          "Deterministic math.js evaluation for arithmetic & algebraic simplifications",
          "Structured step-by-step breakdowns (Problem → Method → Steps → Final Answer)",
          "Practice problem generator for Class 6 to 10 syllabus",
          "Interactive formula reference handbook",
          "Safe, constrained explanation framework without direct answer dumps",
        ]}
      />
    </DashboardLayoutShell>
  );
}

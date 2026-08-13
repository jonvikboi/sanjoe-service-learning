import { FileText } from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { MOCK_ADMIN } from "@/lib/mock-data/users";

export default function AdminContentPage() {
  return (
    <DashboardLayoutShell user={MOCK_ADMIN}>
      <ModulePlaceholder
        title="Curated Content & Career Corner Management"
        category="Administration"
        description="Review, approve, and publish science articles, discovery snippets, scholarship notices, and government Olympiad dates."
        icon={FileText}
        backHref="/admin/dashboard"
        features={[
          "Learning Hub article moderation & publishing",
          "Career Corner verified opportunity postings (NMMS, NTSE, Olympiads)",
          "Daily quote & discovery fact of the day scheduler",
          "Direct PDF handbook attachments via Supabase Storage",
          "Prisma EducationalContent & CareerOpportunity model synchronization",
        ]}
      />
    </DashboardLayoutShell>
  );
}

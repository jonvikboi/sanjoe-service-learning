import { RoleSwitcherBanner } from "@/components/shared/role-switcher-banner";
import { PublicNavbar } from "@/components/navigation/public-navbar";
import { Hero } from "@/components/landing/hero";
import { AboutSchool } from "@/components/landing/about-school";
import { LearningPillars } from "@/components/landing/learning-pillars";
import { StudentExperience } from "@/components/landing/student-experience";
import { LearningBeyondClassroom } from "@/components/landing/learning-beyond-classroom";
import { LmsPreview } from "@/components/landing/lms-preview";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F3]">
      <RoleSwitcherBanner />
      <PublicNavbar />
      <main className="flex-1">
        <Hero />
        <AboutSchool />
        <LearningPillars />
        <StudentExperience />
        <LearningBeyondClassroom />
        <LmsPreview />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

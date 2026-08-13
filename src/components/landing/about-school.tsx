import { ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function AboutSchool() {
  const highlights = [
    {
      title: "Academic Resource Centralization",
      description: "Subject notes, exercise practice sheets, and revision materials stored neatly in one accessible digital location.",
    },
    {
      title: "Direct Teacher-Student Bridge",
      description: "Clear homework assignments, deadline tracking, and timely academic announcements without scattered paper slips.",
    },
    {
      title: "Encouraging Self-Directed Study",
      description: "Equipping students with deterministic study planning, interactive language practice, and foundational math support.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F3] border-b border-[#E6D9D4]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="About Our School & Platform"
              badgeVariant="terracotta"
              title="A dedicated learning space for the Sanjoe Sadan community."
              description="Located in Banashankari 6th Stage, Bengaluru, Sanjoe Sadan Convent School fosters a warm, disciplined, and supportive academic atmosphere. SadanLearn is developed as a focused service-learning initiative to bring modern, student-centric digital learning tools to everyday school life."
            />

            <div className="space-y-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6D9D4] shadow-xs"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8DDD9] text-[#C75A4B] mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#12324D]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Values & Mission Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#12324D] text-white p-8 sm:p-10 shadow-xl overflow-hidden border border-[#1D4366]">
              {/* Background watermark */}
              <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#C75A4B]/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <Badge variant="pink" className="bg-[#F4C7C3] text-[#12324D] font-semibold">
                  Our Service-Learning Mission
                </Badge>

                <blockquote className="text-2xl sm:text-3xl font-serif leading-snug italic text-[#FAF7F3]">
                  &ldquo;Empowering students with equal access to quality study materials, language confidence, and practical study habits.&rdquo;
                </blockquote>

                <p className="text-sm text-[#A9B3CE] leading-relaxed">
                  SadanLearn is designed not to replace classroom teaching, but to amplify the dedication of our faculty and give students the tools they need to review lessons, organize study hours, and explore knowledge with curiosity.
                </p>

                <div className="pt-4 border-t border-[#1D4366] flex flex-wrap items-center justify-between gap-4 text-xs text-[#A9B3CE]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#F4C7C3]" />
                    <span>Safe & Distraction-Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="h-4 w-4 text-[#F4C7C3]" />
                    <span>Community-Driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

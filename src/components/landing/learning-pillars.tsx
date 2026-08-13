import { BookOpen, CalendarDays, Compass, Sparkles, LucideIcon, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { LEARNING_PILLARS } from "@/lib/mock-data/school";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  CalendarDays,
  Compass,
  Sparkles,
};

export function LearningPillars() {
  return (
    <section id="pillars" className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-[#E6D9D4]">
      <Container size="lg">
        <SectionHeading
          badge="Educational Framework"
          badgeVariant="terracotta"
          title="Four pillars that guide every student."
          description="SadanLearn is organized around four clear learning dimensions designed to support classroom success and holistic curiosity."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {LEARNING_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || BookOpen;

            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#E6D9D4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C75A4B] hover:shadow-[0_12px_28px_rgba(18,50,77,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        color: pillar.color,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#12324D] group-hover:text-[#C75A4B] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#2C5D7D]">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF7F3] flex items-center gap-1.5 text-xs font-semibold text-[#C75A4B] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore pillar</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

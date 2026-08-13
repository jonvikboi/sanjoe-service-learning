import { Languages, Calculator, Compass, GraduationCap } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { LEARNING_BEYOND_CLASS } from "@/lib/mock-data/school";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  Languages,
  Calculator,
  Compass,
  GraduationCap,
};

export function LearningBeyondClassroom() {
  return (
    <section id="beyond" className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-[#E6D9D4]">
      <Container size="lg">
        <SectionHeading
          badge="Self-Paced Discovery"
          badgeVariant="pink"
          title="Learning beyond traditional textbooks."
          description="Education extends into language confidence, mathematical problem-solving logic, general awareness, and future scholarship pathways."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {LEARNING_BEYOND_CLASS.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Compass;

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#E6D9D4] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#C75A4B]/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8DDD9] text-[#C75A4B] group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="terracotta" size="sm">
                      {item.pill}
                    </Badge>
                  </div>

                  <h3 className="mt-5 font-bold text-base text-[#12324D] group-hover:text-[#C75A4B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

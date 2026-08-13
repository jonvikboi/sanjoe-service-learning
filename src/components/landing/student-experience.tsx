import { FileText, CheckSquare, CalendarClock, Languages } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { STUDENT_EXPERIENCE_FEATURES } from "@/lib/mock-data/school";

const iconMap = {
  FileText,
  CheckSquare,
  CalendarClock,
  Languages,
};

export function StudentExperience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAF7F3] border-b border-[#E6D9D4]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 sticky top-28">
            <SectionHeading
              badge="Day-to-Day Learning"
              badgeVariant="navy"
              title="A clear, calm experience for every learner."
              description="Designed specifically for middle and high school students, SadanLearn removes friction from studying. Everything is accessible in a few clicks without visual clutter."
            />

            <div className="p-6 rounded-2xl bg-white border border-[#E6D9D4] shadow-xs space-y-3">
              <h4 className="font-bold text-sm text-[#12324D] uppercase tracking-wider">
                Key Classroom Benefits
              </h4>
              <ul className="text-xs sm:text-sm text-[#64748B] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C75A4B]" />
                  <span>No lost paper notes or unreadable whiteboard photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C75A4B]" />
                  <span>Direct deadline reminders before assignments are due</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C75A4B]" />
                  <span>Multi-subject revision plans built around exam dates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {STUDENT_EXPERIENCE_FEATURES.map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || FileText;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E6D9D4] bg-white p-6 transition-all duration-200 hover:shadow-md hover:border-[#2C5D7D]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EBF2F7] text-[#2C5D7D]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B] bg-[#FAF7F3] px-2.5 py-1 rounded-md border border-[#E6D9D4]/60">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold text-base text-[#12324D]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

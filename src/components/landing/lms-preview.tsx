import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Compass,
  Clock,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function LmsPreview() {
  return (
    <section id="lms-preview" className="py-20 lg:py-28 bg-[#FAF7F3] border-b border-[#E6D9D4] relative overflow-hidden">
      <Container size="lg">
        <SectionHeading
          badge="Interactive LMS Preview"
          badgeVariant="terracotta"
          title="Step inside the SadanLearn workspace."
          description="A calm, distraction-free digital portal built around your daily timetable, subjects, and study milestones."
          align="center"
        >
          <div className="flex justify-center w-full mt-2">
            <Link href="/login">
              <Button size="lg" className="shadow-md">
                <span>Access Student / Teacher Portal</span>
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </SectionHeading>

        {/* Mock UI Frame reproducing LMS aesthetic */}
        <div className="mt-12 rounded-3xl border border-[#E6D9D4] bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(18,50,77,0.1)]">
          {/* Top simulated browser/app header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E6D9D4] mb-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#E7A69B]" />
              <span className="h-3 w-3 rounded-full bg-[#F4C7C3]" />
              <span className="h-3 w-3 rounded-full bg-[#2C5D7D]" />
              <span className="ml-2 text-xs font-semibold text-[#64748B] hidden sm:inline">
                sadanlearn.sanjoe.edu/student/dashboard
              </span>
            </div>
            <Badge variant="terracotta" size="sm">
              Live Mock Preview
            </Badge>
          </div>

          {/* Mini Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left simulated sidebar */}
            <div className="hidden md:flex lg:col-span-3 flex-col bg-[#12324D] text-white p-4 rounded-2xl space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#1D4366]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C75A4B] font-bold text-xs">
                  SS
                </div>
                <div>
                  <p className="text-xs font-bold">SadanLearn</p>
                  <p className="text-[10px] text-[#A9B3CE]">Class 8A Portal</p>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="bg-[#C75A4B] text-white px-3 py-2 rounded-lg font-medium flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5" /> Dashboard
                </div>
                <div className="text-[#A9B3CE] hover:text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5" /> Notes
                </div>
                <div className="text-[#A9B3CE] hover:text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  <ClipboardList className="h-3.5 w-3.5" /> Homework
                </div>
                <div className="text-[#A9B3CE] hover:text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5" /> Study Planner
                </div>
              </div>
            </div>

            {/* Right main simulated workspace */}
            <div className="lg:col-span-9 space-y-5">
              {/* Mini hero banner */}
              <div className="rounded-2xl bg-gradient-to-r from-[#F8DDD9] to-[#FFFDF9] border border-[#F4C7C3] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C75A4B]">
                      Today&apos;s Focus
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#12324D]">
                      Mathematics: Linear Equations in One Variable
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      4 revision resources • Estimated review time: 25 mins
                    </p>
                  </div>
                  <Link href="/login">
                    <Button size="sm" className="shadow-xs">
                      Open Lesson
                    </Button>
                  </Link>
                </div>
              </div>

              {/* 3 mini cards preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-[#E6D9D4] bg-[#FAF7F3]">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span className="font-semibold text-[#12324D]">Homework</span>
                    <Clock className="h-3.5 w-3.5 text-[#C75A4B]" />
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#12324D]">
                    Exercise 4.2 Problems
                  </p>
                  <p className="text-xs text-[#C75A4B] mt-1">Due Tomorrow 4 PM</p>
                </div>

                <div className="p-4 rounded-xl border border-[#E6D9D4] bg-[#FAF7F3]">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span className="font-semibold text-[#12324D]">Latest Notes</span>
                    <BookOpen className="h-3.5 w-3.5 text-[#2C5D7D]" />
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#12324D]">
                    Science: Atomic Structure
                  </p>
                  <p className="text-xs text-[#2C5D7D] mt-1">PDF • 2.1 MB</p>
                </div>

                <div className="p-4 rounded-xl border border-[#E6D9D4] bg-[#FAF7F3]">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span className="font-semibold text-[#12324D]">Daily Streak</span>
                    <Sparkles className="h-3.5 w-3.5 text-[#C75A4B]" />
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#12324D]">
                    5 Consecutive Days
                  </p>
                  <p className="text-xs text-emerald-700 mt-1">Study Goal Met</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  CalendarDays,
  Calculator,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { StatCard } from "@/components/dashboard/stat-card";
import { FeaturedLearningCard } from "@/components/dashboard/featured-learning-card";
import { SubjectCard } from "@/components/dashboard/subject-card";
import { HomeworkCard } from "@/components/dashboard/homework-card";
import { RecentNoteCard } from "@/components/dashboard/recent-note-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_STUDENT } from "@/lib/mock-data/users";
import {
  STUDENT_DASHBOARD_STATS,
  STUDENT_TODAYS_LEARNING,
  STUDENT_SUBJECTS,
  STUDENT_UPCOMING_HOMEWORK,
  STUDENT_RECENT_NOTES,
  STUDENT_TODAY_TASKS,
  STUDENT_LEARNING_TOOLS,
} from "@/lib/mock-data/student";

export default function StudentDashboardPage() {
  return (
    <DashboardLayoutShell user={MOCK_STUDENT}>
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Greeting Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="terracotta" size="sm">
                {MOCK_STUDENT.grade} • {MOCK_STUDENT.section}
              </Badge>
              <span className="text-xs text-[#64748B]">Roll No: {MOCK_STUDENT.rollNumber}</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#12324D]">
              Good morning, {MOCK_STUDENT.name}.
            </h1>
            <p className="mt-1 text-sm text-[#64748B]">
              Here&apos;s your daily learning schedule, active assignments, and recent notes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/student/planner">
              <Button variant="outline" size="sm" className="bg-white">
                <CalendarDays className="h-4 w-4 mr-1.5 text-[#C75A4B]" />
                <span>Open Planner</span>
              </Button>
            </Link>
            <Link href="/student/math">
              <Button size="sm">
                <Calculator className="h-4 w-4 mr-1.5" />
                <span>Math Solver</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* 3 Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STUDENT_DASHBOARD_STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Featured Learning + Upcoming Deadlines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Left Column: Featured Today + Subjects */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Learning Panel */}
            <FeaturedLearningCard
              subject={STUDENT_TODAYS_LEARNING.subject}
              chapter={STUDENT_TODAYS_LEARNING.chapter}
              topic={STUDENT_TODAYS_LEARNING.topic}
              progress={STUDENT_TODAYS_LEARNING.progress}
              estimatedTime={STUDENT_TODAYS_LEARNING.estimatedTime}
              resourcesCount={STUDENT_TODAYS_LEARNING.resourcesCount}
            />

            {/* My Subjects Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#12324D]">My Subjects</h2>
                  <p className="text-xs text-[#64748B]">
                    Enrolled classes & chapter notes repository
                  </p>
                </div>
                <Link
                  href="/student/classes"
                  className="text-xs font-semibold text-[#C75A4B] hover:underline"
                >
                  View All Subjects →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {STUDENT_SUBJECTS.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
            </div>

            {/* Recent Uploaded Notes */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#12324D]">
                    Recently Added Notes
                  </h2>
                  <p className="text-xs text-[#64748B]">
                    Fresh study materials uploaded by your teachers
                  </p>
                </div>
                <Link
                  href="/student/notes"
                  className="text-xs font-semibold text-[#C75A4B] hover:underline"
                >
                  All Notes ({STUDENT_RECENT_NOTES.length}) →
                </Link>
              </div>

              <div className="space-y-3">
                {STUDENT_RECENT_NOTES.map((note) => (
                  <RecentNoteCard key={note.id} note={note} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Rail: Upcoming Homework & Today's Study Tasks */}
          <div className="lg:col-span-4 space-y-6">
            {/* Upcoming Homework Rail */}
            <div className="rounded-2xl border border-[#E6D9D4] bg-[#FFFDF9] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6D9D4]">
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-[#C75A4B]" />
                  <h2 className="font-bold text-sm text-[#12324D]">
                    Upcoming Homework
                  </h2>
                </div>
                <Badge variant="terracotta" size="sm">
                  {STUDENT_UPCOMING_HOMEWORK.length} Due
                </Badge>
              </div>

              <div className="mt-4 space-y-3">
                {STUDENT_UPCOMING_HOMEWORK.map((hw) => (
                  <HomeworkCard key={hw.id} homework={hw} />
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E6D9D4]">
                <Link href="/student/homework">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    <span>View Homework Hub</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Today's Study Checklist */}
            <div className="rounded-2xl border border-[#E6D9D4] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#FAF7F3]">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#2C5D7D]" />
                  <h2 className="font-bold text-sm text-[#12324D]">
                    Today&apos;s Study Tasks
                  </h2>
                </div>
                <span className="text-xs text-[#64748B]">1 / 3 done</span>
              </div>

              <div className="mt-3 space-y-2.5">
                {STUDENT_TODAY_TASKS.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7F3] transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-4 w-4 text-[#94A3B8] shrink-0 mt-0.5" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-semibold ${
                          task.completed
                            ? "text-[#64748B] line-through"
                            : "text-[#12324D]"
                        }`}
                      >
                        {task.topic}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#64748B]">
                        <span className="text-[#C75A4B]">{task.subject}</span>
                        <span>•</span>
                        <span>{task.durationMinutes} mins</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Tools Quick Navigation */}
            <div className="rounded-2xl border border-[#E6D9D4] bg-white p-5 shadow-xs space-y-3">
              <h2 className="font-bold text-sm text-[#12324D]">
                Self-Learning Tools
              </h2>

              <div className="space-y-2">
                {STUDENT_LEARNING_TOOLS.map((tool) => (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-[#E6D9D4]/60 hover:border-[#C75A4B] hover:bg-[#F8DDD9]/30 transition-all text-xs font-medium text-[#12324D]"
                  >
                    <span className="font-semibold">{tool.title}</span>
                    <span className="text-[10px] text-[#C75A4B] font-bold">
                      {tool.badge} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayoutShell>
  );
}

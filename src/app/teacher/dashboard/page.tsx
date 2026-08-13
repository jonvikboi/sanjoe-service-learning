import Link from "next/link";
import {
  FileUp,
  PlusCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { StatCard } from "@/components/dashboard/stat-card";
import { QuickActionCard } from "@/components/dashboard/quick-action-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_TEACHER } from "@/lib/mock-data/users";
import {
  TEACHER_DASHBOARD_STATS,
  TEACHER_CLASSES,
  TEACHER_ACTIVE_HOMEWORK,
  TEACHER_RECENT_SUBMISSIONS,
  TEACHER_RECENT_ACTIVITY,
} from "@/lib/mock-data/teacher";

export default function TeacherDashboardPage() {
  return (
    <DashboardLayoutShell user={MOCK_TEACHER}>
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Greeting Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Badge variant="navy" size="sm">
              Teaching Faculty Portal
            </Badge>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#12324D]">
              Good morning, {MOCK_TEACHER.name}.
            </h1>
            <p className="mt-1 text-sm text-[#64748B]">
              {MOCK_TEACHER.designation} — Manage classroom materials, assignments, and student reviews.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/teacher/notes">
              <Button variant="outline" size="sm" className="bg-white">
                <FileUp className="h-4 w-4 mr-1.5 text-[#C75A4B]" />
                <span>Upload Notes</span>
              </Button>
            </Link>
            <Link href="/teacher/homework">
              <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-1.5" />
                <span>Create Homework</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* 3 Quick Action Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <QuickActionCard
            title="Upload Class Notes"
            description="Share PDFs & study materials directly with your assigned classes."
            iconName="FileUp"
            href="/teacher/notes"
            colorVariant="terracotta"
          />
          <QuickActionCard
            title="Create Assignment"
            description="Set homework tasks, submission instructions, and deadlines."
            iconName="PlusCircle"
            href="/teacher/homework"
            colorVariant="navy"
          />
          <QuickActionCard
            title="Class Announcement"
            description="Publish notices for upcoming test dates and school activities."
            iconName="Megaphone"
            href="/teacher/announcements"
            colorVariant="blue"
          />
        </div>

        {/* 3 Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TEACHER_DASHBOARD_STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Assigned Classes & Active Homework */}
          <div className="lg:col-span-8 space-y-8">
            {/* My Assigned Classes */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#12324D]">
                    My Assigned Classes
                  </h2>
                  <p className="text-xs text-[#64748B]">
                    Academic Year 2026–27 roster
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEACHER_CLASSES.map((cls) => (
                  <div
                    key={cls.id}
                    className="rounded-2xl border border-[#E6D9D4] bg-white p-5 hover:border-[#C75A4B] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C75A4B] bg-[#F8DDD9] px-2.5 py-1 rounded-lg">
                        {cls.grade}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {cls.studentCount} Students
                      </span>
                    </div>

                    <h4 className="mt-3 text-lg font-bold text-[#12324D]">
                      {cls.name}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Class Teacher: {cls.classTeacher}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#FAF7F3] flex items-center justify-between">
                      <Link
                        href={`/teacher/notes?classId=${cls.id}`}
                        className="text-xs font-semibold text-[#12324D] hover:text-[#C75A4B]"
                      >
                        Notes Repository
                      </Link>
                      <Link
                        href={`/teacher/submissions?classId=${cls.id}`}
                        className="text-xs font-semibold text-[#C75A4B] hover:underline"
                      >
                        Submissions →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Assignments & Submission Progress */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#12324D]">
                    Active Assignments
                  </h2>
                  <p className="text-xs text-[#64748B]">
                    Current submissions and pending student tasks
                  </p>
                </div>
                <Link
                  href="/teacher/homework"
                  className="text-xs font-semibold text-[#C75A4B] hover:underline"
                >
                  Manage All Homework →
                </Link>
              </div>

              <div className="space-y-3">
                {TEACHER_ACTIVE_HOMEWORK.map((hw) => {
                  const percentage = Math.round(
                    ((hw.submissionCount || 0) / (hw.totalStudents || 1)) * 100
                  );

                  return (
                    <div
                      key={hw.id}
                      className="rounded-2xl border border-[#E6D9D4] bg-white p-5 hover:border-[#2C5D7D] transition-all"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C75A4B]">
                              {hw.subject}
                            </span>
                            <span className="text-xs text-[#94A3B8]">•</span>
                            <span className="text-xs font-medium text-[#12324D]">
                              {hw.grade}
                            </span>
                          </div>
                          <h4 className="mt-1 font-bold text-base text-[#12324D]">
                            {hw.title}
                          </h4>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-bold text-[#12324D]">
                            {hw.submissionCount} / {hw.totalStudents}
                          </span>
                          <p className="text-[11px] text-[#64748B]">Submissions</p>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-[#E6D9D4]">
                          <div
                            className="h-full rounded-full bg-[#2C5D7D]"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-[#FAF7F3] flex items-center justify-between text-xs text-[#64748B]">
                        <span className="flex items-center gap-1 text-[#C75A4B]">
                          <Clock className="h-3.5 w-3.5" />
                          Due: {hw.dueDate}
                        </span>

                        <Link
                          href={`/teacher/submissions?hwId=${hw.id}`}
                          className="font-semibold text-[#12324D] hover:text-[#C75A4B]"
                        >
                          Review Submissions ({percentage}%) →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Rail: Recent Submissions Needing Review & Activity */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recent Submissions */}
            <div className="rounded-2xl border border-[#E6D9D4] bg-[#FFFDF9] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6D9D4]">
                <h3 className="font-bold text-sm text-[#12324D]">
                  Recent Submissions
                </h3>
                <Badge variant="blue" size="sm">
                  Review Queue
                </Badge>
              </div>

              <div className="mt-4 space-y-3">
                {TEACHER_RECENT_SUBMISSIONS.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3 rounded-xl border border-[#E6D9D4] bg-white text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#12324D]">
                        {sub.studentName}
                      </span>
                      <span className="text-[#64748B]">{sub.studentRoll}</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] line-clamp-1">
                      {sub.homeworkTitle}
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-[#C75A4B]">{sub.submittedAt}</span>
                      <Badge
                        variant={sub.status === "REVIEWED" ? "success" : "terracotta"}
                        size="sm"
                      >
                        {sub.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E6D9D4]">
                <Link href="/teacher/submissions">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    <span>Open Submission Manager</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Activity Stream */}
            <div className="rounded-2xl border border-[#E6D9D4] bg-white p-5 shadow-xs">
              <h3 className="font-bold text-sm text-[#12324D] pb-3 border-b border-[#FAF7F3]">
                Recent Department Activity
              </h3>

              <div className="mt-3 space-y-3 text-xs">
                {TEACHER_RECENT_ACTIVITY.map((act) => (
                  <div key={act.id} className="p-2.5 rounded-xl hover:bg-[#FAF7F3]">
                    <div className="flex items-center justify-between font-semibold text-[#12324D]">
                      <span>{act.title}</span>
                      <span className="text-[10px] text-[#94A3B8]">{act.time}</span>
                    </div>
                    <p className="mt-1 text-[#64748B] text-[11px]">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayoutShell>
  );
}

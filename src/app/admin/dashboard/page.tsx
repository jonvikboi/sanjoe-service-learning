import Link from "next/link";
import {
  Users,
  GraduationCap,
  School,
  Library,
  FileText,
  ArrowRight,
  Activity,
  UserCheck,
} from "lucide-react";
import { DashboardLayoutShell } from "@/components/dashboard/dashboard-layout-shell";
import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_ADMIN } from "@/lib/mock-data/users";
import {
  ADMIN_DASHBOARD_STATS,
  ADMIN_RECENT_USERS,
  ADMIN_SYSTEM_LOGS,
} from "@/lib/mock-data/admin";

export default function AdminDashboardPage() {
  const managementLinks = [
    {
      title: "Students Directory",
      description: "Manage student enrollments, sections, and roll lists.",
      icon: GraduationCap,
      href: "/admin/students",
      count: "420 Students",
      color: "bg-[#F8DDD9] text-[#C75A4B]",
    },
    {
      title: "Teaching Faculty",
      description: "Faculty assignments, subject mappings, and permissions.",
      icon: Users,
      href: "/admin/teachers",
      count: "24 Teachers",
      color: "bg-[#EBF2F7] text-[#2C5D7D]",
    },
    {
      title: "Classes & Sections",
      description: "Grades 6 through 10, sections A & B, room allocations.",
      icon: School,
      href: "/admin/classes",
      count: "12 Classes",
      color: "bg-[#12324D]/10 text-[#12324D]",
    },
    {
      title: "Subjects & Syllabus",
      description: "State curriculum subjects, textbook units, and chapter lists.",
      icon: Library,
      href: "/admin/subjects",
      count: "8 Subjects",
      color: "bg-[#F8DDD9] text-[#C75A4B]",
    },
    {
      title: "Educational Content",
      description: "Learning Hub articles, science curiosities, and career notices.",
      icon: FileText,
      href: "/admin/content",
      count: "32 Items",
      color: "bg-[#EBF2F7] text-[#2C5D7D]",
    },
  ];

  return (
    <DashboardLayoutShell user={MOCK_ADMIN}>
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Greeting Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Badge variant="terracotta" size="sm">
              School Administrative Console
            </Badge>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#12324D]">
              Administrative Overview
            </h1>
            <p className="mt-1 text-sm text-[#64748B]">
              {MOCK_ADMIN.name} — {MOCK_ADMIN.designation}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin/students">
              <Button variant="outline" size="sm" className="bg-white">
                <GraduationCap className="h-4 w-4 mr-1.5 text-[#C75A4B]" />
                <span>Manage Students</span>
              </Button>
            </Link>
            <Link href="/admin/teachers">
              <Button size="sm">
                <Users className="h-4 w-4 mr-1.5" />
                <span>Faculty Directory</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* 4 Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADMIN_DASHBOARD_STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Management Portals Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-[#12324D]">
                Platform Management Modules
              </h2>
              <p className="text-xs text-[#64748B]">
                Configure core academic structures and directory records
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {managementLinks.map((mod, idx) => {
              const Icon = mod.icon;

              return (
                <Link
                  key={idx}
                  href={mod.href}
                  className="group rounded-2xl border border-[#E6D9D4] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#C75A4B] hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${mod.color}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" size="sm">
                        {mod.count}
                      </Badge>
                    </div>

                    <h3 className="mt-4 font-bold text-lg text-[#12324D] group-hover:text-[#C75A4B] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#64748B] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#FAF7F3] flex items-center justify-between text-xs font-semibold text-[#C75A4B]">
                    <span>Configure module</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2-Column User Roster & System Log Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Active Users */}
          <div className="lg:col-span-6 rounded-2xl border border-[#E6D9D4] bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#FAF7F3]">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-[#C75A4B]" />
                <h3 className="font-bold text-base text-[#12324D]">
                  Recent Account Activity
                </h3>
              </div>
              <span className="text-xs text-[#64748B]">Active Sessions</span>
            </div>

            <div className="mt-4 space-y-3">
              {ADMIN_RECENT_USERS.map((u) => (
                <div
                  key={u.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-[#E6D9D4]/60 bg-[#FAF7F3]/60 hover:bg-[#FAF7F3]"
                >
                  <div>
                    <p className="text-xs font-bold text-[#12324D]">{u.name}</p>
                    <p className="text-[11px] text-[#64748B]">{u.grade}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={u.role === "TEACHER" ? "navy" : "terracotta"}
                      size="sm"
                    >
                      {u.role}
                    </Badge>
                    <p className="text-[10px] text-[#94A3B8] mt-1">{u.lastLogin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Event Logs */}
          <div className="lg:col-span-6 rounded-2xl border border-[#E6D9D4] bg-[#FFFDF9] p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6D9D4]">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#2C5D7D]" />
                <h3 className="font-bold text-base text-[#12324D]">
                  System Operation Logs
                </h3>
              </div>
              <Badge variant="blue" size="sm">
                Live Audit
              </Badge>
            </div>

            <div className="mt-4 space-y-3">
              {ADMIN_SYSTEM_LOGS.map((log) => (
                <div
                  key={log.id}
                  className="p-3 rounded-xl border border-[#E6D9D4] bg-white text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#12324D]">
                      {log.action}
                    </span>
                    <span className="text-[10px] text-[#64748B]">
                      {log.timestamp}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B]">
                    By <strong className="text-[#12324D]">{log.actor}</strong> → {log.target}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayoutShell>
  );
}

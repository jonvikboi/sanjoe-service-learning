"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  CalendarDays,
  Sparkles,
  Languages,
  Calculator,
  Compass,
  GraduationCap,
  Users,
  School,
  Library,
  Megaphone,
  CheckSquare,
  FileText,
  Layers,
  LogOut,
  X,
  LucideIcon,
} from "lucide-react";
import { UserRole } from "@/types";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const studentNavigation: NavSection[] = [
  {
    title: "MAIN",
    items: [
      { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
      { label: "My Classes", href: "/student/classes", icon: School },
      { label: "Notes", href: "/student/notes", icon: BookOpen, badge: "New" },
      { label: "Homework", href: "/student/homework", icon: ClipboardList, badge: "3" },
      { label: "Study Planner", href: "/student/planner", icon: CalendarDays },
    ],
  },
  {
    title: "LEARNING & TOOLS",
    items: [
      { label: "Learning Hub", href: "/student/learning", icon: Compass },
      { label: "Language Lab", href: "/student/languages", icon: Languages },
      { label: "Math Solver", href: "/student/math", icon: Calculator },
    ],
  },
  {
    title: "OPPORTUNITIES",
    items: [
      { label: "Career Corner", href: "/student/opportunities", icon: Sparkles, badge: "Govt" },
    ],
  },
];

const teacherNavigation: NavSection[] = [
  {
    title: "TEACHER PORTAL",
    items: [
      { label: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard },
      { label: "Notes Repository", href: "/teacher/notes", icon: BookOpen },
      { label: "Homework Manager", href: "/teacher/homework", icon: ClipboardList },
      { label: "Submissions", href: "/teacher/submissions", icon: CheckSquare, badge: "87" },
      { label: "Announcements", href: "/teacher/announcements", icon: Megaphone },
      { label: "Content Library", href: "/teacher/content", icon: Layers },
    ],
  },
];

const adminNavigation: NavSection[] = [
  {
    title: "ADMINISTRATION",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Students Directory", href: "/admin/students", icon: GraduationCap },
      { label: "Teaching Faculty", href: "/admin/teachers", icon: Users },
      { label: "Classes & Sections", href: "/admin/classes", icon: School },
      { label: "Subjects & Syllabus", href: "/admin/subjects", icon: Library },
      { label: "Content Management", href: "/admin/content", icon: FileText },
    ],
  },
];

interface LmsSidebarProps {
  role: UserRole;
  isOpen?: boolean;
  onClose?: () => void;
}

export function LmsSidebar({ role, isOpen, onClose }: LmsSidebarProps) {
  const pathname = usePathname();

  const sections =
    role === "TEACHER"
      ? teacherNavigation
      : role === "ADMIN"
      ? adminNavigation
      : studentNavigation;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#12324D]/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 flex w-72 flex-col bg-[#12324D] text-[#FAF7F3] border-r border-[#1D4366] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
      >
        {/* Brand Header */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-[#1D4366]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C75A4B] to-[#A9473A] text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                SadanLearn
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F4C7C3] bg-[#1D4366] px-1.5 py-0.5 rounded">
                  {role}
                </span>
              </span>
              <span className="text-[11px] text-[#A9B3CE] truncate max-w-[140px]">
                Sanjoe Sadan Convent
              </span>
            </div>
          </Link>

          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-[#A9B3CE] hover:text-white hover:bg-[#1D4366]"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-[#6F91A6]">
                {section.title}
              </p>
              <div className="mt-2 space-y-1">
                {section.items.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== `/${role.toLowerCase()}/dashboard` &&
                      pathname.startsWith(item.href));
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150",
                        isActive
                          ? "bg-[#C75A4B] text-white shadow-sm font-semibold"
                          : "text-[#FAF7F3]/80 hover:bg-[#1D4366] hover:text-white"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0 transition-colors",
                            isActive
                              ? "text-white"
                              : "text-[#A9B3CE] group-hover:text-white"
                          )}
                        />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={cn(
                            "px-2 py-0.5 text-[10px] font-bold rounded-full",
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#2C5D7D] text-[#FAF7F3]"
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* School Footer info */}
        <div className="p-4 border-t border-[#1D4366] bg-[#0B1F30]/40">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">
                Academic Year 2026–27
              </span>
              <span className="text-[11px] text-[#A9B3CE]">
                Bengaluru Campus
              </span>
            </div>
            <Link
              href="/"
              className="p-2 rounded-lg text-[#A9B3CE] hover:text-[#F4C7C3] hover:bg-[#1D4366] transition-colors"
              title="Return to Public Site"
            >
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

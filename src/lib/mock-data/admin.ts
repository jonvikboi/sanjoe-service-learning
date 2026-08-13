import { DashboardStat } from "@/types";

export const ADMIN_DASHBOARD_STATS: DashboardStat[] = [
  {
    label: "Total Students",
    value: "420",
    subtext: "Across Grades 6 through 10",
    iconName: "Users",
    accentColor: "navy",
  },
  {
    label: "Teaching Faculty",
    value: "24",
    subtext: "All subjects assigned",
    iconName: "GraduationCap",
    accentColor: "terracotta",
  },
  {
    label: "Active Classes",
    value: "12",
    subtext: "Sections A & B",
    iconName: "School",
    accentColor: "blue",
  },
  {
    label: "Notes & Resources",
    value: "148",
    subtext: "+14 uploaded this week",
    iconName: "Library",
    accentColor: "terracotta",
  },
];

export const ADMIN_RECENT_USERS = [
  {
    id: "u-1",
    name: "Ananya Sharma",
    email: "ananya.s@sanjoe.edu",
    role: "STUDENT",
    grade: "8th Standard A",
    status: "Active",
    lastLogin: "10 mins ago",
  },
  {
    id: "u-2",
    name: "Mrs. Reena Thomas",
    email: "reena.t@sanjoe.edu",
    role: "TEACHER",
    grade: "Senior Faculty",
    status: "Active",
    lastLogin: "1 hour ago",
  },
  {
    id: "u-3",
    name: "Mr. Ramesh Kumar",
    email: "ramesh.k@sanjoe.edu",
    role: "TEACHER",
    grade: "Science Dept",
    status: "Active",
    lastLogin: "3 hours ago",
  },
  {
    id: "u-4",
    name: "Karthik Raja",
    email: "karthik.r@sanjoe.edu",
    role: "STUDENT",
    grade: "9th Standard B",
    status: "Active",
    lastLogin: "Yesterday",
  },
];

export const ADMIN_SYSTEM_LOGS = [
  {
    id: "log-1",
    action: "New Note Uploaded",
    actor: "Mrs. Reena Thomas",
    target: "Class 8A / Mathematics",
    timestamp: "12 mins ago",
  },
  {
    id: "log-2",
    action: "Homework Created",
    actor: "Mr. Ramesh Kumar",
    target: "Class 8B / Science",
    timestamp: "1 hour ago",
  },
  {
    id: "log-3",
    action: "Announcement Broadcast",
    actor: "Admin (Sister Philomena)",
    target: "All Students & Teachers",
    timestamp: "4 hours ago",
  },
];

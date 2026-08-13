import { DashboardStat, HomeworkItem, SubmissionItem, ClassItem } from "@/types";

export const TEACHER_DASHBOARD_STATS: DashboardStat[] = [
  {
    label: "My Classes",
    value: "04",
    subtext: "142 students enrolled",
    iconName: "GraduationCap",
    accentColor: "navy",
  },
  {
    label: "Active Assignments",
    value: "06",
    subtext: "2 due within 48 hours",
    iconName: "FileCheck2",
    accentColor: "terracotta",
  },
  {
    label: "Submissions Received",
    value: "87 / 112",
    subtext: "77% overall completion rate",
    iconName: "Users",
    accentColor: "blue",
  },
];

export const TEACHER_CLASSES: ClassItem[] = [
  {
    id: "cls-8a",
    grade: "Class 8",
    section: "Section A",
    name: "8A — Mathematics & Science",
    studentCount: 36,
    classTeacher: "Mrs. Reena Thomas",
    academicYear: "2026–2027",
  },
  {
    id: "cls-8b",
    grade: "Class 8",
    section: "Section B",
    name: "8B — Mathematics",
    studentCount: 38,
    classTeacher: "Mr. Ramesh Kumar",
    academicYear: "2026–2027",
  },
  {
    id: "cls-9a",
    grade: "Class 9",
    section: "Section A",
    name: "9A — Mathematics",
    studentCount: 34,
    classTeacher: "Ms. Stella Joseph",
    academicYear: "2026–2027",
  },
  {
    id: "cls-7b",
    grade: "Class 7",
    section: "Section B",
    name: "7B — Science Foundation",
    studentCount: 34,
    classTeacher: "Mrs. Gowri Shankar",
    academicYear: "2026–2027",
  },
];

export const TEACHER_ACTIVE_HOMEWORK: HomeworkItem[] = [
  {
    id: "thw-1",
    title: "Linear Equations Practice Set 4.2",
    subject: "Mathematics",
    grade: "Class 8A",
    dueDate: "Tomorrow, 4:00 PM",
    instructions: "Problems 1 to 10 from page 64. Review algebraic transposition steps.",
    submissionCount: 28,
    totalStudents: 36,
    teacherName: "Mrs. Reena Thomas",
    hasAttachment: true,
  },
  {
    id: "thw-2",
    title: "Quadratic Expressions Introduction Sheet",
    subject: "Mathematics",
    grade: "Class 9A",
    dueDate: "Thursday, 5:00 PM",
    instructions: "Factorize equations 1 through 8 in homework notebook.",
    submissionCount: 19,
    totalStudents: 34,
    teacherName: "Mrs. Reena Thomas",
    hasAttachment: true,
  },
  {
    id: "thw-3",
    title: "Fractions & Decimals Diagnostic Worksheet",
    subject: "Mathematics",
    grade: "Class 8B",
    dueDate: "Friday, 3:30 PM",
    instructions: "Solve all word problems on division of recurring decimals.",
    submissionCount: 22,
    totalStudents: 38,
    teacherName: "Mrs. Reena Thomas",
    hasAttachment: true,
  },
];

export const TEACHER_RECENT_SUBMISSIONS: SubmissionItem[] = [
  {
    id: "subm-1",
    homeworkId: "thw-1",
    homeworkTitle: "Linear Equations Practice Set 4.2",
    studentName: "Ananya Sharma",
    studentRoll: "8A-14",
    submittedAt: "Today at 2:15 PM",
    status: "SUBMITTED",
    fileUrl: "/mock-submission-1.pdf",
  },
  {
    id: "subm-2",
    homeworkId: "thw-1",
    homeworkTitle: "Linear Equations Practice Set 4.2",
    studentName: "Rohan Gowda",
    studentRoll: "8A-22",
    submittedAt: "Today at 1:40 PM",
    status: "SUBMITTED",
    fileUrl: "/mock-submission-2.pdf",
  },
  {
    id: "subm-3",
    homeworkId: "thw-2",
    homeworkTitle: "Quadratic Expressions Introduction Sheet",
    studentName: "Pooja V",
    studentRoll: "9A-07",
    submittedAt: "Yesterday at 6:10 PM",
    status: "REVIEWED",
    gradeScore: "18 / 20",
    feedback: "Excellent factorization steps shown.",
  },
];

export const TEACHER_RECENT_ACTIVITY = [
  {
    id: "act-1",
    title: "Uploaded Notes",
    description: "Chapter 4 — Linear Equations Formula Summary (Class 8A)",
    time: "2 hours ago",
    iconName: "FileText",
  },
  {
    id: "act-2",
    title: "Created Homework",
    description: "Assigned Quadratic Expressions worksheet to Class 9A",
    time: "5 hours ago",
    iconName: "PlusCircle",
  },
  {
    id: "act-3",
    title: "Published Announcement",
    description: "Math Olympiad registration deadline reminder sent to Class 8 & 9",
    time: "Yesterday",
    iconName: "Megaphone",
  },
];

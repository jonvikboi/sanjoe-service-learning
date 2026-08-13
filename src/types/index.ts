export type UserRole = "STUDENT" | "TEACHER" | "ADMIN";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  grade?: string;
  section?: string;
  rollNumber?: string;
  designation?: string;
}

export interface SubjectItem {
  id: string;
  name: string;
  code: string;
  color: string;
  iconName: string;
  resourcesCount: number;
  grade: string;
  teacherName?: string;
}

export interface ClassItem {
  id: string;
  grade: string;
  section: string;
  name: string;
  studentCount: number;
  classTeacher: string;
  academicYear: string;
}

export interface NoteItem {
  id: string;
  title: string;
  subject: string;
  chapter: string;
  grade: string;
  teacherName: string;
  fileUrl?: string;
  fileSize: string;
  uploadedAt: string;
  downloadsCount: number;
}

export type HomeworkStatus = "PENDING" | "SUBMITTED" | "LATE" | "REVIEWED";

export interface HomeworkItem {
  id: string;
  title: string;
  subject: string;
  grade: string;
  dueDate: string;
  instructions: string;
  status?: HomeworkStatus;
  submissionCount?: number;
  totalStudents?: number;
  teacherName: string;
  hasAttachment?: boolean;
}

export interface SubmissionItem {
  id: string;
  homeworkId: string;
  homeworkTitle: string;
  studentName: string;
  studentRoll: string;
  submittedAt: string;
  status: HomeworkStatus;
  fileUrl?: string;
  gradeScore?: string;
  feedback?: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  priority: "NORMAL" | "HIGH" | "URGENT";
  targetRole: "ALL" | "STUDENT" | "TEACHER";
}

export interface StudyTaskItem {
  id: string;
  subject: string;
  topic: string;
  scheduledDate: string;
  durationMinutes: number;
  completed: boolean;
}

export interface LearningToolItem {
  id: string;
  title: string;
  description: string;
  category: "Languages" | "Mathematics" | "Discovery" | "Opportunities";
  href: string;
  iconName: string;
  badge?: string;
}

export interface DashboardStat {
  label: string;
  value: string | number;
  subtext?: string;
  iconName: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  accentColor?: "terracotta" | "navy" | "pink" | "blue" | "success";
}

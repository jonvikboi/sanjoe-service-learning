import { UserProfile } from "@/types";

export const MOCK_STUDENT: UserProfile = {
  id: "std-001",
  name: "Ananya Sharma",
  email: "student@sadanlearn.local",
  role: "STUDENT",
  grade: "8th Standard",
  section: "Section A",
  rollNumber: "8A-14",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
};

export const MOCK_TEACHER: UserProfile = {
  id: "tch-001",
  name: "Mrs. Reena Thomas",
  email: "teacher@sadanlearn.local",
  role: "TEACHER",
  designation: "Senior Mathematics & Science Faculty",
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
};

export const MOCK_ADMIN: UserProfile = {
  id: "adm-001",
  name: "Sister Philomena (Administrator)",
  email: "admin@sadanlearn.local",
  role: "ADMIN",
  designation: "Academic Coordinator & Administrator",
  avatarUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80",
};

export const MOCK_USERS_BY_ROLE: Record<string, UserProfile> = {
  STUDENT: MOCK_STUDENT,
  TEACHER: MOCK_TEACHER,
  ADMIN: MOCK_ADMIN,
};

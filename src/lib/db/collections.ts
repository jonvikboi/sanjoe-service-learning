import { Collection, Document } from "mongodb";
import { getDb } from "./mongodb";

/**
 * SadanLearn MongoDB Collection Names
 * Defined as constants to ensure consistency across the application.
 */
export const COLLECTIONS = {
  USERS: "users",
  STUDENTS: "students",
  TEACHERS: "teachers",
  CLASSES: "classes",
  SUBJECTS: "subjects",
  ENROLLMENTS: "enrollments",
  TEACHER_ASSIGNMENTS: "teacherAssignments",
  NOTES: "notes",
  HOMEWORK: "homework",
  SUBMISSIONS: "submissions",
  ANNOUNCEMENTS: "announcements",
  STUDY_PLANS: "studyPlans",
  STUDY_TASKS: "studyTasks",
  EDUCATIONAL_CONTENT: "educationalContent",
  LANGUAGE_LESSONS: "languageLessons",
  QUIZZES: "quizzes",
  QUIZ_QUESTIONS: "quizQuestions",
  QUIZ_ATTEMPTS: "quizAttempts",
  CAREER_OPPORTUNITIES: "careerOpportunities",
  AI_REQUESTS: "aiRequests",
} as const;

export type CollectionName = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];

/**
 * Helper to obtain a typed MongoDB collection from the database.
 */
export async function getCollection<T extends Document = Document>(
  collectionName: CollectionName
): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(collectionName);
}

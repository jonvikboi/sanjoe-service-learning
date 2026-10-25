import { Db } from "mongodb";
import { COLLECTIONS } from "./collections";

/**
 * Ensures required database indexes exist on critical collections.
 * Can be run during server startup, deployment, or seeding.
 */
export async function ensureIndexes(db: Db): Promise<void> {
  // 1. Users Collection
  await db.collection(COLLECTIONS.USERS).createIndexes([
    { key: { email: 1 }, unique: true, name: "idx_users_email_unique" },
    { key: { role: 1 }, name: "idx_users_role" },
  ]);

  // 2. Students & Teachers
  await db.collection(COLLECTIONS.STUDENTS).createIndexes([
    { key: { userId: 1 }, unique: true, name: "idx_students_user_id" },
    { key: { rollNumber: 1 }, name: "idx_students_roll_number" },
  ]);

  await db.collection(COLLECTIONS.TEACHERS).createIndexes([
    { key: { userId: 1 }, unique: true, name: "idx_teachers_user_id" },
  ]);

  // 3. Classes & Subjects
  await db.collection(COLLECTIONS.CLASSES).createIndexes([
    { key: { grade: 1, section: 1 }, unique: true, name: "idx_classes_grade_section_unique" },
  ]);

  await db.collection(COLLECTIONS.SUBJECTS).createIndexes([
    { key: { code: 1 }, unique: true, name: "idx_subjects_code_unique" },
    { key: { grade: 1 }, name: "idx_subjects_grade" },
  ]);

  // 4. Enrollments & Teacher Assignments
  await db.collection(COLLECTIONS.ENROLLMENTS).createIndexes([
    { key: { studentId: 1, classId: 1 }, unique: true, name: "idx_enrollments_student_class_unique" },
  ]);

  await db.collection(COLLECTIONS.TEACHER_ASSIGNMENTS).createIndexes([
    { key: { teacherId: 1, classId: 1, subjectId: 1 }, unique: true, name: "idx_teacher_assignments_unique" },
  ]);

  // 5. Notes & Academic Materials
  await db.collection(COLLECTIONS.NOTES).createIndexes([
    { key: { subjectId: 1, chapter: 1 }, name: "idx_notes_subject_chapter" },
    { key: { classId: 1 }, name: "idx_notes_class" },
  ]);

  // 6. Homework & Submissions
  await db.collection(COLLECTIONS.HOMEWORK).createIndexes([
    { key: { classId: 1, dueDate: 1 }, name: "idx_homework_class_due" },
    { key: { subjectId: 1 }, name: "idx_homework_subject" },
  ]);

  await db.collection(COLLECTIONS.SUBMISSIONS).createIndexes([
    { key: { homeworkId: 1, studentId: 1 }, unique: true, name: "idx_submissions_homework_student_unique" },
  ]);

  // 7. Study Plans & Tasks
  await db.collection(COLLECTIONS.STUDY_PLANS).createIndexes([
    { key: { studentId: 1, date: 1 }, name: "idx_study_plans_student_date" },
  ]);
}

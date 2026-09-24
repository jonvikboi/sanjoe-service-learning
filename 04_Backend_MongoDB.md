# SadanLearn --- Member 4

## Backend + MongoDB Engineer

**Assigned to:** Evan K S  
**Role:** Backend + MongoDB Engineer  
**Primary branch:** `feature/mongodb-backend`

### Scope

Own MongoDB Atlas, the MongoDB Node.js Driver, collections, indexes,
GridFS, server functions, validation, and authorization.

### Architecture

``` text
Next.js
  ↓
Server Actions / Route Handlers
  ↓
MongoDB Node.js Driver
  ↓
MongoDB Atlas
```

No Supabase. No Prisma.

### Collections

``` text
users
students
teachers
classes
subjects
enrollments
teacherAssignments
notes
homework
submissions
announcements
studyPlans
studyTasks
educationalContent
languageLessons
quizzes
quizQuestions
quizAttempts
careerOpportunities
aiRequests
```

### Relationships

Use ObjectId references:

``` text
homework.teacherId
homework.classId
homework.subjectId
submission.studentId
submission.homeworkId
note.teacherId
note.classId
note.subjectId
```

### Indexes

Start with query-driven indexes such as:

``` text
users.email
students.userId
teachers.userId
enrollments.studentId
enrollments.classId
homework.classId + homework.dueDate
submissions.homeworkId + submissions.studentId
notes.classId + notes.subjectId
```

Do not create unnecessary indexes.

### MongoDB Client

Create:

``` text
lib/db/mongodb.ts
lib/db/collections.ts
lib/db/indexes.ts
```

Use a reusable MongoClient singleton.

### Phase 1 --- Setup

Configure:

``` text
MONGODB_URI=
MONGODB_DB_NAME=sadanlearn
```

Create development seed scripts and index setup scripts. MongoDB does
not use Prisma migrations.

### Notes

Implement:

``` text
createNote()
getNotes()
getNote()
updateNote()
deleteNote()
```

### Homework

Implement:

``` text
createHomework()
getHomework()
getHomeworkById()
updateHomework()
deleteHomework()
getStudentHomework()
```

### Submissions

Implement:

``` text
createSubmission()
getSubmission()
getTeacherSubmissions()
```

Enforce:

``` text
Student A → own submission only
Teacher → submissions for assigned classes only
```

### Announcements

Implement:

``` text
createAnnouncement()
getAnnouncements()
deleteAnnouncement()
```

Support all-student, class, and subject targeting.

### Study Planner

Provide persistence for:

``` text
studyPlans
studyTasks
```

Member 5 owns planner logic.

### File Storage --- GridFS

Use MongoDB GridFS for:

``` text
notes
homework
submissions
school-assets
```

Store file IDs and metadata in normal MongoDB documents. Do not put
large binary files directly into ordinary documents.

Validate file type, size, ownership, and association.

### Validation

Use Zod:

``` text
createHomeworkSchema
createNoteSchema
submissionSchema
announcementSchema
studyPlanSchema
```

### Authorization

Enforce server-side:

``` text
requireClassAccess()
requireTeacherAssignment()
```

Never rely on hidden UI controls or client-side roles.

### Backend Contract

Provide typed functions for Member 3:

``` text
createHomework(input)
getStudentHomework(studentId)
submitHomework(input)
getTeacherSubmissions(teacherId)
```

### Documentation

Create:

``` text
docs/DATABASE.md
docs/BACKEND.md
```

Document collections, relationships, indexes, GridFS, security, and seed
scripts.

### Done When

MongoDB connects, collections/indexes are established,
notes/homework/submissions/storage work, validation and authorization
are enforced, and frontend developers have stable typed integration
functions.


## Git Branch

```text
feature/mongodb-backend
```


## Team Git Workflow

The repository uses a protected `main` branch. **Only the Project Lead should merge feature branches into `main`** after review.

### Branch hierarchy

```text
main
  │
  ├── feature/project-foundation  → Joshua Zachary Jose
  ├── feature/design-system       → Shrayana K S
  ├── feature/lms-frontend        → Anushka Pravakar
  ├── feature/mongodb-backend     → Evan K S
  └── feature/ai-learning         → Dean Joah Bell
```

### Initial development sequence

```text
1. Joshua Zachary Jose
   feature/project-foundation
   ↓
   Project initialization
   Design tokens
   Base routing
   Basic landing-page/LMS shell
   MongoDB/Auth architecture

2. Shrayana K S
   feature/design-system
   ↓
   Shared UI + public website

3. Anushka Pravakar
   feature/lms-frontend
   ↓
   Student/Teacher/Admin LMS interfaces

4. Evan K S
   feature/mongodb-backend
   ↓
   MongoDB collections + backend services

5. Dean Joah Bell
   feature/ai-learning
   ↓
   AI abstraction + learning features
```

This is the recommended dependency sequence, not a requirement that everyone work sequentially. Once the foundation is stable, members can work in parallel.

### Branch Rules

1. Never commit directly to `main`.
2. Pull/rebase from the latest `main` before opening a PR.
3. Keep commits focused.
4. Do not modify another member's feature area without coordination.
5. Run lint, type-check, and production build before a PR.
6. Open a Pull Request when the feature is ready.
7. Joshua Zachary Jose reviews and merges the PR.
8. Delete merged feature branches when no longer needed.

### PR Flow

```text
Feature branch
      ↓
Pull latest main
      ↓
Lint + type-check + build
      ↓
Pull Request
      ↓
Project Lead review
      ↓
Fix requested changes
      ↓
Approve + merge
      ↓
Team pulls latest main
```

### Frontend/Backend Integration

```text
Anushka                         Evan
LMS UI  ←──── API contract ───→ MongoDB backend
   │                               │
   └──────────────┬────────────────┘
                  ↓
             Joshua Zachary Jose
              Integration
```

Agree on function names, input types, and return types before connecting frontend and backend.

### Shared Development Rule

Check the relevant documentation before implementing a new module:

```text
docs/DEVELOPMENT_HANDOFF.md
docs/DATABASE.md
docs/DESIGN_SYSTEM.md
```

Keep `main` continuously usable as the team's integration branch.


# SadanLearn --- Member 1

## Project Lead + Full-Stack Architect

**Assigned to:** Joshua Zachary Jose  
**Role:** Project Lead + Full-Stack Architect  
**Primary branch:** `feature/project-foundation`

### Scope

Own the project foundation, architecture, integration,
authentication/RBAC, and initial landing page + LMS shell. Do **not**
implement the entire LMS.

### Stack

-   Next.js 16 + React + TypeScript
-   Tailwind CSS + shadcn/ui + Lucide React
-   MongoDB Atlas
-   Official MongoDB Node.js Driver
-   Auth.js (NextAuth) with MongoDB adapter
-   MongoDB GridFS for uploaded files
-   Zod
-   Vercel

**Removed:** Supabase, Prisma, Express, separate backend server.

### Repository Foundation

``` text
app/
components/
data/
docs/
lib/
  auth/
  db/
  permissions/
  validators/
  ai/
prisma/        # REMOVE this directory
public/
types/
```

Use instead:

``` text
lib/db/mongodb.ts
lib/db/collections.ts
lib/db/indexes.ts
```

### Environment

``` text
MONGODB_URI=
MONGODB_DB_NAME=sadanlearn
AUTH_SECRET=
AI_PROVIDER=mock
GROQ_API_KEY=
NVIDIA_API_KEY=
```

Never expose secrets through `NEXT_PUBLIC_*`.

### Design Tokens

``` text
Soft Pink      #F4C7C3
Terracotta     #C75A4B
Deep Navy      #12324D
Calm Blue      #2C5D7D
Warm Cream     #FAF7F3
Dark Charcoal  #1F2328
```

Typography: Poppins; DM Serif Display sparingly.

Use the supplied Sanjoe Sadan school image as the primary visual
identity reference.

Public design inspiration:
https://dribbble.com/shots/27633624-School-Landing-Page

LMS structural inspiration: the supplied EduAdmin/EduLearn dashboard
reference. Do not clone either design.

### Landing Page

Create `/`: 1. Navbar 2. Hero with school imagery 3. About preview 4.
Learning pillars 5. Student experience 6. LMS preview 7. Enter LMS CTA
8. Footer

Primary CTA: `Enter LMS → /login`

Do not fabricate school facts or statistics.

### LMS Shell

Create:

``` text
/login

/student/dashboard
/student/classes
/student/notes
/student/homework
/student/planner
/student/learning
/student/languages
/student/math
/student/opportunities

/teacher/dashboard
/teacher/notes
/teacher/homework
/teacher/submissions
/teacher/announcements
/teacher/content

/admin/dashboard
/admin/students
/admin/teachers
/admin/classes
/admin/subjects
/admin/content
```

Build only the shell and mock-data screens initially.

### Auth + RBAC

Roles:

``` text
STUDENT
TEACHER
ADMIN
```

Prepare:

``` text
requireAuth()
requireStudent()
requireTeacher()
requireAdmin()
```

Flow:

``` text
Auth.js
  ↓
MongoDB user/role
  ↓
Student / Teacher / Admin dashboard
```

Never trust client-provided roles.

### MongoDB Architecture

Use a single reusable `MongoClient` rather than opening a connection per
request.

Collections:

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

Use ObjectId references and indexes based on actual query patterns.

### AI Foundation

Create:

``` text
lib/ai/provider.ts
lib/ai/mock.ts
lib/ai/groq.ts
lib/ai/nvidia.ts
```

Default to `AI_PROVIDER=mock`.

Maintain `docs/AI_SETUP.md`.

### Do Not Implement

Complete notes/homework/submissions, planner logic, language learner,
Math Solver, Career Corner, quizzes, attendance, parent portal,
notifications, payments, or live classes.

### Handoff

Create `docs/DEVELOPMENT_HANDOFF.md` documenting routes, design tokens,
MongoDB setup, Auth.js, mock data, integration points, and remaining
work.

### Suggested Branches

``` text
feature/project-foundation
feature/auth
feature/rbac
feature/integration
feature/deployment
```

### Done When

The app runs, the landing page and LMS shell are polished, auth/RBAC
architecture is ready, MongoDB connects, responsive layouts work, and
teammates can start feature branches.


## Git Branch

```text
feature/project-foundation
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


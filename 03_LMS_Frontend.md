# SadanLearn --- Member 3

## LMS Frontend Engineer

**Assigned to:** Anushka Pravakar  
**Role:** LMS Frontend Engineer  
**Primary branch:** `feature/lms-frontend`

### Scope

Build the Student, Teacher, and Admin LMS interfaces using Member 1's
shell and Member 2's design system.

### LMS Reference

Use the supplied EduAdmin/EduLearn screenshot for structural
inspiration: - persistent sidebar - topbar - summary cards -
learning/resource sections - upcoming tasks - profile area - responsive
layout

Do not copy its branding or exact design.

Use:

``` text
#F4C7C3
#C75A4B
#12324D
#2C5D7D
#FAF7F3
#1F2328
```

### Student

Build:

``` text
/student/dashboard
/student/classes
/student/notes
/student/homework
/student/planner
/student/learning
/student/languages
/student/math
/student/opportunities
```

Dashboard:

``` text
Greeting
Summary
Today's Learning
Upcoming Homework
Subjects
Learning Tools
```

Start with mock data.

### Teacher

``` text
/teacher/dashboard
/teacher/notes
/teacher/homework
/teacher/submissions
/teacher/announcements
/teacher/content
```

Homework UI:

``` text
Title
Description
Subject
Class
Due Date
Attachment
```

Integrate with Member 4's MongoDB-backed server functions.

### Admin

``` text
/admin/dashboard
/admin/students
/admin/teachers
/admin/classes
/admin/subjects
/admin/content
```

Use tables, search, filters, forms, detail views, and confirmation
dialogs.

### Data Flow

Do not query MongoDB directly from presentation components.

Preferred:

``` text
UI
 ↓
Server Action / Route Handler
 ↓
Zod validation
 ↓
Member 4 backend function
 ↓
MongoDB
```

### UX States

Every major page needs: - loading - empty - error - success feedback

### Responsive

Desktop: persistent sidebar + topbar. Mobile: collapsible navigation +
stacked content + touch-friendly controls.

### Do Not Own

MongoDB schema, MongoDB indexes, Auth.js configuration, authorization
rules, AI providers, public website architecture, or database business
logic.

### Done When

All role dashboards/routes exist, responsive behavior works, mock
screens are polished, and MongoDB integration points are cleanly
separated from UI.


## Git Branch

```text
feature/lms-frontend
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


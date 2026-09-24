# SadanLearn --- Member 5

## AI + Learning Features Engineer

**Assigned to:** Dean Joah Bell  
**Role:** AI + Learning Features Engineer  
**Primary branch:** `feature/ai-learning`

### Scope

Own AI abstraction plus Math Solver, Language Learner, Study Planner,
Learning Hub, and Career Corner.

### AI Architecture

``` text
lib/ai/
├── provider.ts
├── mock.ts
├── groq.ts
├── nvidia.ts
├── math.ts
├── language.ts
└── study.ts
```

Flow:

``` text
Feature
 ↓
AI Service
 ↓
Provider Interface
 ├── Mock
 ├── Groq
 └── NVIDIA
```

Environment:

``` text
AI_PROVIDER=mock
GROQ_API_KEY=
NVIDIA_API_KEY=
```

Never expose keys through `NEXT_PUBLIC_*`.

### Free/Low-Cost Provider Guide

Create `docs/AI_SETUP.md`.

Explain: - Groq API-key setup - NVIDIA API/NIM setup - environment
configuration - provider switching - testing - rate limits/quotas -
troubleshooting - API-key security

Use official provider documentation and verify current model
availability when writing the guide because models and free quotas can
change.

### Mock Provider

The project must work without any AI key.

### Cost Controls

-   Server-side AI calls
-   Input/output limits
-   Rate limiting where practical
-   Graceful quota errors
-   Use deterministic math calculations before AI where possible
-   Avoid unnecessary repeated calls

### Math Solver

Route: `/student/math`

Flow:

``` text
Problem
 ↓
Validate
 ↓
math.js where possible
 ↓
AI explanation only when useful
 ↓
Step-by-step answer
```

Support basic arithmetic, percentages, algebra, equations, roots, etc.

### Language Learner

Route: `/student/languages`

Languages:

``` text
English
Kannada
Hindi
```

Features: - vocabulary - translation - example sentences - grammar -
practice - mini quizzes

### Study Planner

Route: `/student/planner`

Inputs: - subjects - exam dates - available hours - priority -
difficulty

Basic algorithm:

``` text
Subjects + exam dates + hours + priority + difficulty
 ↓
Allocate study time
 ↓
Distribute tasks
 ↓
StudyPlan
 ↓
Member 4 persists it in MongoDB
```

Keep the MVP algorithm simple.

### Learning Hub

Route: `/student/learning`

Categories:

``` text
Science
Sports
Health
Technology
General Knowledge
Study Tips
```

Content should be age-appropriate and updateable.

### Career Corner

Route: `/student/opportunities`

Support: - scholarships - government opportunities - competitions -
Olympiads - skill programmes - career information

Do not permanently hard-code time-sensitive opportunities; make content
updateable through the admin system.

### Student Data

Send only minimum necessary data to AI services. Never send unnecessary
identifiers, contact information, or sensitive records.

### Integration

Coordinate with Member 4 for:

``` text
studyPlans
studyTasks
educationalContent
languageLessons
careerOpportunities
aiRequests
```

Coordinate with Member 3 for UI and Member 1 for provider architecture.

### Do Not Build

General-purpose chatbot, advanced AI tutor, voice assistant, facial
recognition, complex AI analytics, parent portal, attendance, or live
classes.

### Done When

Mock AI works without credentials; Groq/NVIDIA can be configured; all
five learning modules work; MongoDB persistence is integrated where
needed; documentation is complete; AI calls are controlled and
server-side.


## Git Branch

```text
feature/ai-learning
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


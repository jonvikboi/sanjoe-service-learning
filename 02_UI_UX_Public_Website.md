# SadanLearn --- Member 2

## UI/UX + Public Website

**Assigned to:** Shrayana K S  
**Role:** UI/UX + Public Website  
**Primary branch:** `feature/design-system`

### Scope

Own the design system and public school website. Provide reusable UI
components for the LMS but do not implement LMS business logic.

### Brand

Use the Sanjoe Sadan school building as the visual identity reference.

``` text
Soft Pink      #F4C7C3
Terracotta     #C75A4B
Deep Navy      #12324D
Calm Blue      #2C5D7D
Warm Cream     #FAF7F3
Dark Charcoal  #1F2328
```

Typography: - Poppins - DM Serif Display sparingly

Public reference:
https://dribbble.com/shots/27633624-School-Landing-Page

Use for composition, typography, whitespace, imagery, and
hierarchy---not cloning.

### Components

Create:

``` text
Button
Card
Badge
Input
Dialog
SectionHeading
PageHeader
Container
Navbar
Footer
DashboardStat
ResourceCard
SubjectCard
QuickAction
EmptyState
LoadingState
```

Avoid generic SaaS styling, neon colors, excessive glassmorphism,
childish visuals, and endless card grids.

### Public Routes

``` text
/
 /about
 /learning
 /student-life
 /resources
 /contact
```

### Home

``` text
Navbar
 ↓
Hero
 ↓
About School
 ↓
Learning Pillars
 ↓
Student Experience
 ↓
Learning Beyond Classroom
 ↓
SadanLearn Preview
 ↓
Enter LMS CTA
 ↓
Footer
```

Use school imagery. Do not invent official facts.

Learning pillars:

``` text
Learn
Plan
Explore
Grow
```

### LMS Preview

Show conceptual previews of: - Notes - Homework - Study Planner -
Learning Hub

CTA: `Enter SadanLearn → /login`

### Responsive + Accessibility

Test mobile, tablet, laptop, desktop, and large desktop.

Implement semantic HTML, keyboard navigation, visible focus states,
accessible labels, good contrast, and reduced-motion consideration.

### Documentation

Create `docs/DESIGN_SYSTEM.md`.

### Done When

The public website feels like a real, elegant school website rather than
a generic LMS/SaaS template, uses the approved palette consistently, and
provides reusable UI for Member 3.


## Git Branch

```text
feature/design-system
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


# SadanLearn --- Sanjoe Sadan Convent School LMS

## Full Implementation Blueprint for Antigravity

> **Project type:** Service-learning / school technology project\
> **Target school:** Sanjoe Sadan Convent School, Banashankari 6th Stage
> 10th Block, Hemmigepura, Bengaluru, Karnataka 560060\
> **Primary goal:** Build a lightweight, elegant, student-friendly
> digital learning platform that centralizes school resources and adds
> useful self-learning tools without creating unnecessary technical
> complexity.

------------------------------------------------------------------------

# 1. Product Vision

## Product name

**SadanLearn**

### Tagline

**Learn. Plan. Explore. Grow.**

SadanLearn is a school-focused digital learning and student-support
platform. It should not feel like a generic enterprise LMS. The product
should feel like an extension of the school itself: warm, trustworthy,
academic, youthful, and easy to use.

The system has two connected experiences:

1.  **Public school landing page**
2.  **Authenticated LMS application**

The public website introduces the school/platform and routes users into
the LMS.

------------------------------------------------------------------------

# 2. Product Structure

``` text
SadanLearn
│
├── Public School Website
│   ├── Home
│   ├── About the School
│   ├── Learning
│   ├── Student Life
│   ├── Resources
│   ├── Contact
│   └── Enter LMS
│
└── LMS
    ├── Authentication
    ├── Student Portal
    ├── Teacher Portal
    └── Admin Portal
```

The public landing page must remain visually distinct from the
authenticated LMS.

------------------------------------------------------------------------

# 3. Core User Roles

## Student

Can:

-   Log in
-   View classes
-   View subjects
-   Read/download notes
-   View homework
-   Submit homework
-   View announcements
-   Create study plans
-   Use educational resources
-   Learn English/Kannada/Hindi
-   Use the basic Math Solver
-   View study tips
-   View careers/opportunities

## Teacher

Can:

-   Log in
-   View assigned classes
-   Upload notes
-   Create homework
-   Attach resources
-   View submissions
-   Publish announcements
-   Add educational content
-   Create simple quizzes/resources

## Admin

Can:

-   Manage students
-   Manage teachers
-   Manage classes
-   Manage subjects
-   Assign teachers to subjects/classes
-   Manage educational content
-   Manage career/opportunity content
-   Manage announcements
-   View basic system statistics

------------------------------------------------------------------------

# 4. MVP Scope

## P0 --- Must Build

-   Public landing page
-   Authentication
-   Role-based access
-   Student dashboard
-   Teacher dashboard
-   Admin dashboard
-   Classes
-   Subjects
-   Notes
-   Homework
-   Homework submission
-   Announcements
-   Study planner
-   Educational hub

## P1 --- Build After Core LMS Works

-   Language learner
-   Math Solver
-   Simple quizzes
-   Career/opportunity section
-   Study tips
-   Downloadable study planner PDF

## P2 --- Future

Do not implement in the first release:

-   Parent portal
-   Attendance
-   Fee management
-   Online payments
-   Live classes
-   Video conferencing
-   Native mobile apps
-   Advanced AI tutor
-   Advanced analytics
-   Facial recognition
-   Biometric attendance
-   Complex gamification

------------------------------------------------------------------------

# 5. Recommended Technology Stack

## Frontend

-   **Next.js 16**
-   **React**
-   **TypeScript**
-   **Tailwind CSS**
-   **shadcn/ui**
-   **Lucide React**

## Backend

Use the Next.js backend rather than a separate Express server.

-   Next.js Server Actions
-   Next.js Route Handlers
-   TypeScript
-   Zod validation

Do NOT create a separate Express backend for V1.

## Database / Backend Services

-   **Supabase**
-   **PostgreSQL**
-   **Supabase Auth**
-   **Supabase Storage**
-   **Prisma ORM**

Supabase should provide the initial managed backend infrastructure.

## AI

Use one provider initially:

-   Gemini API OR OpenAI API

AI should only be used where it materially improves the product:

-   Math explanations
-   Language assistance
-   Study assistance

Do not make the entire LMS AI-dependent.

## Utility Libraries

-   React Hook Form
-   Zod
-   date-fns
-   math.js
-   jsPDF or equivalent for planner export if needed

## Deployment

-   Vercel
-   Supabase
-   GitHub

------------------------------------------------------------------------

# 6. MongoDB Decision

## Decision: Use PostgreSQL, not MongoDB

MongoDB is technically suitable for a small application and can be used
if the team already has strong MongoDB experience.

However, this LMS is highly relational:

``` text
Student
  ↓
Enrollment
  ↓
Class
  ↓
Subject
  ↓
Teacher
```

and:

``` text
Teacher
  ↓
Homework
  ↓
Submission
  ↓
Student
```

PostgreSQL is therefore a better fit.

### Use:

**Supabase PostgreSQL + Prisma**

### Do not use:

MongoDB + Express + separate authentication + separate file storage.

That architecture adds unnecessary infrastructure.

------------------------------------------------------------------------

# 7. Architecture

``` text
                         USERS
                           │
            ┌──────────────┼──────────────┐
            │              │              │
         Student        Teacher         Admin
            │              │              │
            └──────────────┼──────────────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │     Next.js      │
                 │ React + TypeScript│
                 └────────┬─────────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
        Server Actions  API Routes   AI Layer
             │            │            │
             └────────────┼────────────┘
                          ▼
                 ┌──────────────────┐
                 │     Supabase     │
                 ├──────────────────┤
                 │ PostgreSQL       │
                 │ Authentication   │
                 │ Storage          │
                 └──────────────────┘
                          │
                          ▼
                       Vercel
```

------------------------------------------------------------------------

# 8. Frontend Architecture

Use the Next.js App Router.

Recommended structure:

``` text
app/
├── page.tsx
│
├── about/
├── learning/
├── student-life/
├── resources/
├── contact/
│
├── login/
│
├── dashboard/
│
├── student/
│   ├── classes/
│   ├── notes/
│   ├── homework/
│   ├── planner/
│   ├── learning/
│   ├── languages/
│   ├── math/
│   └── opportunities/
│
├── teacher/
│   ├── dashboard/
│   ├── notes/
│   ├── homework/
│   ├── submissions/
│   ├── announcements/
│   └── content/
│
├── admin/
│   ├── dashboard/
│   ├── students/
│   ├── teachers/
│   ├── classes/
│   ├── subjects/
│   └── content/
│
└── api/
    ├── math/
    ├── language/
    └── planner/
```

------------------------------------------------------------------------

# 9. Component Architecture

``` text
components/
├── ui/
│   ├── Button
│   ├── Card
│   ├── Dialog
│   ├── Input
│   ├── Select
│   └── etc.
│
├── landing/
│   ├── Hero
│   ├── SchoolStory
│   ├── LearningPillars
│   ├── StudentLife
│   ├── ResourcePreview
│   └── Footer
│
├── dashboard/
│   ├── DashboardHeader
│   ├── StatCard
│   ├── QuickAction
│   ├── RecentActivity
│   └── NotificationPanel
│
├── notes/
├── homework/
├── planner/
├── learning/
├── languages/
├── math/
└── shared/
```

Components should be reusable and data-driven.

Avoid building every page as one giant component.

------------------------------------------------------------------------

# 10. Visual Design System

# 10A. LMS Design Reference — EduAdmin / EduLearn Inspiration

The uploaded **EduAdmin / EduLearn LMS dashboard reference** is the primary visual inspiration for the authenticated LMS interface.

This reference should influence the **layout, information architecture, dashboard density, navigation model, course/resource presentation, and admin/teacher dashboard patterns**.

It must NOT replace the Sanjoe Sadan visual identity.

## What to take from the LMS reference

### 1. Persistent left sidebar

Use a clean desktop sidebar for the authenticated LMS.

Suggested structure:

```text
SADANLEARN

MAIN
  Dashboard
  My Classes
  Notes
  Homework
  Study Planner

LEARNING
  Learning Hub
  Languages
  Math Solver
  Quizzes

OPPORTUNITIES
  Career Corner

SYSTEM
  Notifications
  Profile
  Settings
```

The sidebar should:

- Remain visually stable
- Clearly indicate the active route
- Collapse on smaller screens
- Use Lucide icons
- Keep labels short
- Avoid the excessive menu depth shown in the reference

### 2. Dashboard overview cards

The reference uses compact summary cards at the top of the dashboard.

Adapt these for school-specific metrics.

Student example:

```text
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ Pending Tasks  │ │ Notes Available│ │ Study Streak  │
│      04        │ │      28        │ │      05 days   │
└────────────────┘ └────────────────┘ └────────────────┘
```

Teacher example:

```text
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ My Classes     │ │ Assignments    │ │ Submissions    │
│      04        │ │      12        │ │      87        │
└────────────────┘ └────────────────┘ └────────────────┘
```

Admin example:

```text
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ Students       │ │ Teachers       │ │ Classes        │
│      ...       │ │      ...       │ │      ...       │
└────────────────┘ └────────────────┘ └────────────────┘
```

Do not fabricate statistics in production.

### 3. Large featured learning panel

The reference has a prominent hero/banner card inside the dashboard.

Adapt this into a **Today's Learning / Continue Learning** panel.

For students:

```text
Today's Learning

Mathematics
Chapter 4 — Linear Equations

Continue →
```

The panel should use:

- Soft pink background
- Navy typography
- Terracotta CTA
- Small school/learning illustration or approved imagery

### 4. Course/resource cards

The reference uses card-based course presentation.

SadanLearn should use cards for:

- Subjects
- Notes
- Learning resources
- Language lessons
- Educational content

Example:

```text
┌────────────────────────────┐
│  MATHEMATICS               │
│                            │
│  Linear Equations          │
│  Chapter 4                 │
│                            │
│  6 resources               │
│  [ Open Subject ]          │
└────────────────────────────┘
```

Do not overload cards with unnecessary metadata.

### 5. Data visualization

The reference includes charts.

Charts should be used only where they provide actual value.

Potential future uses:

- Student study progress
- Homework completion
- Quiz performance
- Teacher submission statistics
- Admin-level platform usage

Do NOT add charts simply to make the dashboard look more complex.

For V1, a student dashboard should prioritize actionable tasks over analytics.

### 6. Right-side information panel

The reference includes a profile/information rail.

For SadanLearn, this can become:

```text
┌─────────────────────┐
│ Upcoming            │
│                     │
│ Mathematics         │
│ Due Tomorrow        │
│                     │
│ Science             │
│ Due Friday          │
└─────────────────────┘
```

On smaller screens, move this content below the primary dashboard content.

### 7. Strong visual hierarchy

Follow the reference's general hierarchy:

```text
Page title
      ↓
Summary cards
      ↓
Featured learning area
      ↓
Resources / subjects
      ↓
Tasks / deadlines
```

But simplify it for school users.

The dashboard should answer:

> **What do I need to learn or do today?**

within a few seconds.

---

# 10B. LMS Design Adaptation Rules

The EduAdmin/EduLearn reference is a **layout and UX reference**, not a branding reference.

## Preserve from the reference

- Left navigation
- Dashboard structure
- Summary cards
- Featured content
- Resource cards
- Clean grid system
- Search
- Profile area
- Information hierarchy
- Desktop dashboard density
- Responsive collapse behavior

## Change for SadanLearn

Replace the reference's generic blue/white SaaS styling with the SadanLearn school identity:

```text
Reference UI
     ↓
SadanLearn adaptation
     ↓
Deep Navy       #12324D
Terracotta      #C75A4B
Soft Pink       #F4C7C3
Calm Blue       #2C5D7D
Warm Cream      #FAF7F3
Dark Text       #1F2328
```

### Primary interface behavior

**Navy**

- Sidebar
- Top-level navigation
- Strong headings
- Footer
- Selected structural elements

**Terracotta**

- Primary buttons
- Active indicators
- Important actions
- Progress highlights

**Soft Pink**

- Featured panels
- Learning highlights
- Empty-state illustrations
- Dashboard accent surfaces

**Calm Blue**

- Secondary actions
- Information
- Supporting visual elements

**Warm Cream**

- Main page background

## Avoid copying

Do not reproduce:

- EduAdmin branding
- EduLearn branding
- Their exact logo
- Their exact iconography
- Their exact card designs
- Their exact text/content
- Their exact dashboard arrangement pixel-for-pixel
- Their stock imagery
- Their blue color system

The implementation should be **inspired by the UX pattern, not cloned**.

---

# 10C. Student LMS Dashboard

The student dashboard should be the primary reference implementation.

Recommended layout:

```text
┌──────────────────────────────────────────────────────────┐
│ Sidebar │ Topbar                              Profile    │
├─────────┼────────────────────────────────────────────────┤
│         │                                                │
│         │ Good morning, Student                          │
│         │ Here's what you have planned for today.        │
│         │                                                │
│         │ ┌────────┐ ┌────────┐ ┌────────┐              │
│         │ │ Tasks  │ │ Notes  │ │ Streak │              │
│         │ └────────┘ └────────┘ └────────┘              │
│         │                                                │
│         │ ┌──────────────────────────────┐ ┌───────────┐ │
│         │ │ Today's Learning             │ │ Upcoming  │ │
│         │ │                              │ │           │ │
│         │ │ Mathematics                  │ │ Homework  │ │
│         │ │ Linear Equations             │ │ Science   │ │
│         │ │                              │ │ English   │ │
│         │ │ [ Continue Learning ]        │ │           │ │
│         │ └──────────────────────────────┘ └───────────┘ │
│         │                                                │
│         │ My Subjects                                    │
│         │                                                │
│         │ [Math] [Science] [English] [Kannada] [Hindi]  │
│         │                                                │
└─────────┴────────────────────────────────────────────────┘
```

This should feel visually similar in **structure** to the supplied LMS reference while being unmistakably SadanLearn.

---

# 10D. Teacher LMS Dashboard

Use the same shell but change the information priority.

```text
Good morning, Teacher.

Quick Actions

[ Upload Notes ] [ Create Homework ] [ Announcement ]

Overview

Classes       Assignments       Submissions

My Classes

8A Mathematics
8B Mathematics
9A Mathematics

Recent Homework

Mathematics — Linear Equations
23 / 32 submissions
```

Teachers should not be presented with unnecessary student analytics.

---

# 10E. Admin LMS Dashboard

Admin can use the most data-dense version of the dashboard.

```text
Admin Dashboard

Students
Teachers
Classes
Subjects

Platform Activity

Recent Notes
Recent Homework
Recent Announcements

Management

Students
Teachers
Classes
Subjects
Content
```

Charts may be introduced here later if real usage data exists.

---



SadanLearn must look like a **digital extension of Sanjoe Sadan Convent School**, not a generic SaaS LMS.

The supplied school-building photograph is the visual source of truth for the initial identity. Its dominant visual character is:

- Soft dusty/blush pink architecture
- Terracotta/red architectural bands
- Deep navy-blue lettering
- Calm blue sky
- Warm cream/off-white surfaces
- Dark charcoal details
- Multicolored classroom window accents

The digital product should preserve the **pink + terracotta + navy** identity while using the brighter colors only as restrained accents.

## Design Direction

The design should feel:

- Elegant
- Academic
- Warm
- Youthful
- Trustworthy
- Modern
- School-specific
- Editorial rather than corporate

Avoid:

- Generic purple AI gradients
- Excessive glassmorphism
- Neon colors
- Dark-mode-first design
- Huge floating dashboard cards
- Excessive pill-shaped UI
- Overly childish illustrations
- Excessive animation
- Generic startup/SaaS styling

## Public Website vs LMS

### Public Website

Editorial, emotional, image-led, school-oriented.

### LMS

Functional, calm, focused, task-oriented.

Both must share:

- Colors
- Typography
- Icon style
- Button language
- Border treatment
- Logo/wordmark
- Illustration style

## School Photography

Preferred asset priority:

1. Official school logo/crest supplied by the school
2. Approved school-building photograph
3. Approved classroom photographs
4. Approved student/activity photographs
5. Temporary placeholders during development

Never fabricate school photographs, student imagery, school statistics, facilities, achievements, or official claims.

Suggested structure:

```text
public/
├── images/
│   ├── school/
│   │   ├── building/
│   │   ├── campus/
│   │   ├── classrooms/
│   │   └── activities/
│   ├── logo/
│   └── placeholders/
```

The supplied building image should be used as the initial visual reference and, once approved by the school, as a hero/about-page asset.

## Landing Page Visual Concept

The landing page should feel closer to a **premium school website** than a software product landing page.

Use an asymmetric editorial hero:

```text
┌───────────────────────────────────────────────┐
│ SCHOOL LOGO     About Learning Resources      │
│                                  [ ENTER LMS ] │
├───────────────────────────────────────────────┤
│                                               │
│  Nurturing minds.                             │
│  Building futures.                            │
│                                               │
│  A digital learning space for the             │
│  Sanjoe Sadan school community.               │
│                                               │
│  [ Enter Learning Portal ]  [ Explore ]       │
│                                               │
│                         ┌──────────────────┐  │
│                         │ SCHOOL BUILDING  │  │
│                         │     PHOTO        │  │
│                         └──────────────────┘  │
└───────────────────────────────────────────────┘
```

Recommended sections:

1. Hero
2. About Our School
3. Learning Pillars
4. Student Experience
5. Facilities / School Life
6. Learning Beyond the Classroom
7. SadanLearn preview
8. LMS CTA
9. Footer

Learning pillars:

```text
Learn
Plan
Explore
Grow
```

Use actual LMS screenshots/mockups for the product preview rather than generic stock dashboard images.

## LMS Visual Direction

The LMS should feel like:

> **A beautiful school learning portal**

rather than:

> **A corporate admin dashboard**

Use generous whitespace, strong typography, warm surfaces, subtle borders, restrained corner radii, and clear information hierarchy.

# 11. School-Derived Color Palette

The palette is derived from the supplied Sanjoe Sadan Convent School building photograph.

## Primary Palette

```text
Primary Pink         #F4C7C3
Secondary Terracotta #C75A4B
Primary Navy         #12324D
Accent Blue          #2C5D7D
Background           #FAF7F3
Text Dark            #1F2328
```

## Supporting Palette

```text
Soft Pink            #F8DDD9
Light Terracotta     #E7A69B
Muted Blue           #6F91A6
Warm Cream           #FFFDF9
Border               #E6D9D4
White                #FFFFFF
```

## Semantic Colors

```text
Success              #2E7D32
Warning              #F59E0B
Error                #C62828
Info                 #2C5D7D
```

## Usage

### Navy

Use for:

- Main navigation
- Footer
- Major headings
- Structural UI
- LMS sidebar
- High-importance text

### Terracotta

Use for:

- Primary CTA buttons
- Active states
- Important highlights
- Section accents
- Action icons

### Soft Pink

Use for:

- Hero backgrounds
- Highlight cards
- Decorative blocks
- Hover states
- Subtle section backgrounds

### Calm Blue

Use for:

- Secondary actions
- Links
- Information states
- Progress indicators
- Supporting illustrations

### Warm Cream

Use as the primary public-site canvas instead of pure white.

## Critical Rule

Do not use all colors at full intensity simultaneously.

Visual hierarchy:

**Navy → Terracotta → Pink → Blue → Neutral**

The multicolored window bars visible on the school building can inspire occasional micro-accents, but the LMS must not become rainbow-colored.

# 12. Typography

## Primary UI Typeface

Use:

**Poppins**

Suggested weights:

```text
Regular     400
Medium      500
SemiBold    600
Bold        700
```

Poppins should be used for:

- Navigation
- Buttons
- Dashboard UI
- Cards
- Labels
- Headings

## Optional Editorial Typeface

A restrained serif such as **DM Serif Display** may be used for selected public-site statements, quotes, or school-story headings.

Do not use it for normal LMS UI.

## Hierarchy

```text
Hero title:       56–72px
Section title:    36–48px
Page title:       28–36px
Card title:       18–22px
Body:             15–17px
Small text:       13–14px
```

# 13. Public Landing Page

The landing page is a critical part of the product.

It should NOT look like the LMS dashboard.

## Route

``` text
/
```

## Primary navigation

``` text
School
About
Learning
Student Life
Resources
Contact
Enter LMS
```

The **Enter LMS** button routes to:

``` text
/login
```

After login, redirect according to role:

``` text
STUDENT → /student/dashboard
TEACHER → /teacher/dashboard
ADMIN   → /admin/dashboard
```

------------------------------------------------------------------------

# 14. Landing Page Design

The public landing page is the visual identity layer of SadanLearn.

It introduces the school and then guides visitors into the LMS.

## Navigation

```text
School
About
Learning
Student Life
Resources
Contact
Enter LMS
```

## Primary CTA

**Enter LMS**

Route:

```text
/login
```

After authentication:

```text
STUDENT → /student/dashboard
TEACHER → /teacher/dashboard
ADMIN   → /admin/dashboard
```

## Hero

Use the approved school-building image with:

- Warm cream background
- Navy typography
- Terracotta CTA
- Soft pink decorative surfaces
- Calm blue secondary accents

Do not place a generic gradient behind the school photograph.

## About Section

Use an editorial two-column layout:

```text
School story        School photograph
```

Only use verified school information.

## Learning Pillars

```text
Learn
Plan
Explore
Grow
```

## Student Experience

Show actual platform capabilities:

```text
Notes
Homework
Study Planner
Learning Hub
```

## Learning Beyond the Classroom

Show:

```text
Languages
Math Solver
Study Tips
Fun Facts
Career Corner
```

## Final CTA

Use a terracotta section with cream/navy contrast:

```text
Step into a smarter learning experience.

[ Go to SadanLearn → ]
```

## Footer

Use primary navy with:

- SadanLearn
- School name
- Navigation
- LMS link
- Verified contact information

# 15. Landing Page Sections

## 1. Hero

School identity + LMS entry.

## 2. School introduction

Short verified school description.

## 3. Learning pillars

``` text
Learn
Plan
Explore
Grow
```

Each pillar gets an elegant icon and short explanation.

## 4. Student experience

Show:

-   Notes
-   Homework
-   Planner
-   Learning Hub

Use screenshots/mockups of the actual LMS.

## 5. Learning beyond textbooks

Show:

-   Languages
-   Math Solver
-   Fun Facts
-   Study Tips
-   Careers

## 6. School/community section

Use approved photographs from the school.

## 7. LMS CTA

``` text
Ready to learn?

Enter the SadanLearn portal.

[ Enter LMS ]
```

## 8. Footer

Include:

-   School name
-   Location
-   Useful links
-   LMS link
-   Contact information only if officially confirmed

------------------------------------------------------------------------

# 16. School Visual Identity Strategy

Public online information about the school is limited and image
availability is sparse. Search results currently expose a school listing
and a very limited photo gallery, while public school directories
provide basic information. Treat online details as reference material
rather than authoritative branding.

Before finalizing the visual identity, obtain from the school:

-   Logo
-   School crest
-   Official colors if available
-   Campus photographs
-   Classroom photographs
-   Activity photographs
-   School motto
-   Official mission/vision
-   Official contact details
-   Any existing brochure or prospectus

Do not fabricate these.

Until assets are supplied, build the UI using tasteful placeholders that
are easy to replace.

------------------------------------------------------------------------

# 17. LMS Visual Design

The authenticated application should feel like:

**"A beautiful school learning portal"**

rather than:

**"A corporate admin dashboard."**

Desktop layout:

``` text
┌─────────────────────────────────────────────┐
│ Logo / SadanLearn                 Profile   │
├───────────────┬─────────────────────────────┤
│               │                             │
│ Dashboard     │ Good morning, Student      │
│ My Classes    │                             │
│ Notes         │ Today's learning            │
│ Homework      │                             │
│ Planner       │ ┌──────┐ ┌──────┐           │
│ Learning      │ │Notes │ │Tasks │           │
│ Languages     │ └──────┘ └──────┘           │
│ Math          │                             │
│ Opportunities│ Upcoming homework            │
│               │                             │
└───────────────┴─────────────────────────────┘
```

Use generous whitespace and strong typography.

------------------------------------------------------------------------

# 18. Student Dashboard

Prioritize what the student needs today.

Order:

1.  Greeting
2.  Today's tasks
3.  Pending homework
4.  Upcoming deadlines
5.  Quick access to notes
6.  Study planner
7.  Learning discovery

Example:

``` text
Good morning, Ananya.

You have 3 things to focus on today.

[ Mathematics Homework ]
Due tomorrow

[ Science Revision ]
Study Planner — 5:00 PM

[ English Notes ]
Chapter 4 available
```

Then:

``` text
Explore

Math Solver
Language Lab
Daily Fact
Study Tips
Career Corner
```

------------------------------------------------------------------------

# 19. Teacher Dashboard

Teacher actions should be obvious.

``` text
Good morning, Teacher.

Quick Actions

[ Upload Notes ]
[ Create Homework ]
[ Announcement ]
[ View Submissions ]

Your Classes

8A Mathematics
8B Mathematics
9A Mathematics

Recent activity

23/32 submissions received
```

Avoid overwhelming teachers with statistics.

------------------------------------------------------------------------

# 20. Admin Dashboard

Admin is more data-oriented:

``` text
Students
Teachers
Classes
Subjects
Notes
Homework
Announcements

Recent activity
System health
Content management
```

------------------------------------------------------------------------

# 21. Database Schema

Initial Prisma models:

``` text
User
Student
Teacher
Class
Subject
Enrollment
TeacherAssignment
Note
Homework
Submission
Announcement
StudyPlan
StudyTask
EducationalContent
LanguageLesson
Quiz
QuizQuestion
QuizAttempt
CareerOpportunity
AIRequest
```

Optional later:

``` text
Parent
Attendance
Exam
Mark
Notification
```

------------------------------------------------------------------------

# 22. Core Relationships

``` text
User
 ├── Student
 └── Teacher

Student
 └── Enrollment
       └── Class

Teacher
 └── TeacherAssignment
       ├── Class
       └── Subject

Note
 ├── Teacher
 ├── Class
 └── Subject

Homework
 ├── Teacher
 ├── Class
 └── Subject

Submission
 ├── Student
 └── Homework

StudyPlan
 └── StudyTask
```

------------------------------------------------------------------------

# 23. Authentication

Use Supabase Auth.

Required flow:

``` text
Login
 ↓
Supabase authentication
 ↓
Get authenticated user ID
 ↓
Load application profile
 ↓
Determine role
 ↓
Redirect
```

Role routes:

``` text
/student/*
/teacher/*
/admin/*
```

Every protected server operation must verify authorization.

Never trust the role supplied by the client.

------------------------------------------------------------------------

# 24. RBAC

Implement:

``` text
STUDENT
TEACHER
ADMIN
```

Permissions:

### Student

-   Read own classes
-   Read notes available to enrolled class
-   Read homework
-   Submit own homework
-   Manage own study planner
-   Use learning tools

### Teacher

-   Read assigned classes
-   Upload notes to assigned classes
-   Create homework for assigned classes
-   Review submissions for assigned homework
-   Publish allowed content

### Admin

-   Full management access

Create centralized permission helpers:

``` text
requireAuth()
requireStudent()
requireTeacher()
requireAdmin()
requireClassAccess()
requireTeacherAssignment()
```

------------------------------------------------------------------------

# 25. Notes Module

Teacher flow:

``` text
Select class
 ↓
Select subject
 ↓
Enter title
 ↓
Enter chapter
 ↓
Attach PDF/document
 ↓
Validate file
 ↓
Upload to Supabase Storage
 ↓
Save metadata in PostgreSQL
```

Student flow:

``` text
Student
 ↓
My Class
 ↓
Subject
 ↓
Chapter
 ↓
Note
 ↓
Preview / Download
```

Database stores metadata, not the binary file.

------------------------------------------------------------------------

# 26. Homework Module

Teacher:

``` text
Create Homework
 ↓
Class
 ↓
Subject
 ↓
Title
 ↓
Instructions
 ↓
Due date
 ↓
Optional attachment
 ↓
Publish
```

Student:

``` text
Homework
 ↓
View instructions
 ↓
Download attachment
 ↓
Submit file
 ↓
Submission created
```

Teacher:

``` text
Homework
 ↓
Submissions
 ↓
Student
 ↓
View/download submission
 ↓
Mark status
```

Statuses:

``` text
PENDING
SUBMITTED
LATE
REVIEWED
```

------------------------------------------------------------------------

# 27. Study Planner

V1 must be deterministic.

Inputs:

``` text
Exam date
Subjects
Available study time
Preferred study period
Subject priority
```

Algorithm:

``` text
Calculate days remaining
 ↓
Calculate available study hours
 ↓
Assign subject weights
 ↓
Distribute available hours
 ↓
Avoid duplicate sessions
 ↓
Generate StudyTask records
 ↓
Display calendar/list
 ↓
Allow manual edits
 ↓
Export PDF
```

Do not use AI for the basic planner.

AI can be added later as an optional recommendation layer.

------------------------------------------------------------------------

# 28. Language Learner

Supported languages:

``` text
English
Kannada
Hindi
```

V1 features:

-   Vocabulary
-   Basic phrases
-   Simple translations
-   Example sentences
-   Grammar tips
-   Multiple-choice quizzes

Database-driven lessons should be the default.

AI can provide optional explanations.

------------------------------------------------------------------------

# 29. Math Solver

Use a hybrid approach.

``` text
Student question
 ↓
Input validation
 ↓
Detect basic mathematical expression
 ↓
math.js calculation where possible
 ↓
If explanation required:
AI explanation
 ↓
Return structured steps
```

AI response must be constrained to:

``` text
Problem
Method
Step 1
Step 2
Step 3
Final answer
```

Never encourage the AI to simply output an unexplained answer.

For simple deterministic calculations, do not call an AI API.

------------------------------------------------------------------------

# 30. Educational Hub

Categories:

``` text
Science
Sports
Health
General Knowledge
Technology
Study Tips
```

Content should be stored in PostgreSQL.

Model:

``` text
EducationalContent
 ├── title
 ├── content
 ├── category
 ├── ageGroup
 ├── imageUrl
 ├── authorId
 ├── published
 └── publishedAt
```

Teachers/admins manage content.

Students consume content.

------------------------------------------------------------------------

# 31. Careers and Opportunities

Call this:

**Career Corner**

rather than simply "Government Jobs."

Categories:

``` text
Scholarships
Competitions
Olympiads
Skill Programs
Career Paths
Government Opportunities
```

Store:

``` text
title
description
eligibility
deadline
officialUrl
source
category
```

Use official government sources whenever possible.

Do not scrape random job websites in V1.

------------------------------------------------------------------------

# 32. AI Architecture

Create:

``` text
lib/ai/
├── provider.ts
├── math.ts
├── language.ts
└── study.ts
```

Use a provider abstraction:

``` text
generateExplanation()
translateText()
generateStudySuggestion()
```

This prevents the application from being tightly coupled to one AI
provider.

Do not expose API keys to the client.

All AI calls must happen server-side.

------------------------------------------------------------------------

# 33. File Storage

Use Supabase Storage buckets.

Recommended:

``` text
notes
homework
submissions
school-assets
```

Rules:

-   Validate file type
-   Limit file size
-   Use secure paths
-   Do not expose unrestricted storage
-   Authorize downloads
-   Never allow arbitrary executable uploads

Allowed initial formats:

``` text
PDF
DOCX
PPTX
PNG
JPG
JPEG
```

For school use, enforce reasonable limits such as 10--25 MB per upload.

------------------------------------------------------------------------

# 34. Validation

Use Zod.

Every mutation must validate:

``` text
Authentication
Authorization
Input schema
File type
File size
Relationships
```

Example:

``` text
CreateHomeworkSchema
 ├── title
 ├── description
 ├── classId
 ├── subjectId
 └── dueDate
```

Never rely only on client-side validation.

------------------------------------------------------------------------

# 35. Error Handling

Every feature must have:

-   Loading state
-   Empty state
-   Error state
-   Success state

Example:

``` text
No homework yet.

Your teacher hasn't posted any homework for this class.
```

Avoid blank pages.

------------------------------------------------------------------------

# 36. Responsive Design

The application must work on:

``` text
Mobile
Tablet
Laptop
Desktop
```

Prioritize mobile.

Do not simply shrink the desktop dashboard.

For mobile:

``` text
Bottom navigation
Large touch targets
Stacked cards
Simple menus
```

------------------------------------------------------------------------

# 37. Accessibility

Implement:

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   Proper labels
-   Alt text
-   Good color contrast
-   Large enough touch targets
-   Clear error messages

Target WCAG 2.1 AA principles where practical.

------------------------------------------------------------------------

# 38. Security

This system handles school/student data.

Minimum security requirements:

-   HTTPS
-   Secure authentication
-   Role-based authorization
-   Server-side validation
-   File validation
-   Rate limiting for AI endpoints
-   No API keys in frontend
-   No student data in logs
-   Secure storage policies
-   Database constraints
-   Audit-friendly operations

AI requests should contain only the minimum information necessary.

------------------------------------------------------------------------

# 39. Privacy

Do not send unnecessary student information to external AI services.

Bad:

``` text
Student name
Age
School
Roll number
Address
Question
```

Good:

``` text
Grade: 8
Question: 2x + 5 = 15
```

Do not expose student records publicly.

------------------------------------------------------------------------

# 40. Routing

Public:

``` text
/
/about
/learning
/student-life
/resources
/contact
```

Authentication:

``` text
/login
```

LMS:

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

/teacher/dashboard
/teacher/notes
/teacher/homework
/teacher/submissions
/teacher/announcements

/admin/dashboard
/admin/students
/admin/teachers
/admin/classes
/admin/subjects
/admin/content
```

------------------------------------------------------------------------

# 41. Landing Page → LMS Flow

``` text
Visitor
 ↓
/
 ↓
Explore school
 ↓
Click "Enter LMS"
 ↓
/login
 ↓
Authenticate
 ↓
Role detection
 ↓
Student / Teacher / Admin dashboard
```

The public landing page must never expose authenticated LMS data.

------------------------------------------------------------------------

# 42. Design Assets

Create:

``` text
public/
├── images/
│   ├── school/
│   ├── students/
│   ├── activities/
│   └── placeholders/
│
├── logo/
└── icons/
```

Do not invent a school logo.

Use a temporary text-based SadanLearn mark until the school provides the
official logo.

------------------------------------------------------------------------

# 43. Motion Design

Use subtle animation only.

Recommended:

-   Fade-in sections
-   Slight image movement
-   Button hover
-   Card hover
-   Page transitions
-   Scroll reveal

Avoid:

-   Excessive parallax
-   Constant floating objects
-   Huge animated backgrounds
-   Heavy 3D effects
-   Animation on every component

Use Framer Motion only if necessary. It is optional for V1.

------------------------------------------------------------------------

# 44. Landing Page Visual Concept

The public website should use an editorial school aesthetic.

Suggested structure:

``` text
┌─────────────────────────────────────────────┐
│ SCHOOL LOGO       About  Learning  Enter LMS│
├─────────────────────────────────────────────┤
│                                             │
│      Learning with purpose.                 │
│      Growing with confidence.               │
│                                             │
│      [ Enter LMS ]                          │
│                                             │
│                         ┌──────────────┐    │
│                         │ SCHOOL IMAGE │    │
│                         └──────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│        A learning community                 │
│                                             │
│ Learn        Plan        Explore       Grow │
│                                             │
├─────────────────────────────────────────────┤
│              STUDENT EXPERIENCE             │
│                                             │
│     notes     homework     planner           │
│                                             │
├─────────────────────────────────────────────┤
│             LEARNING BEYOND CLASS           │
│                                             │
│ Languages   Math   Facts   Careers          │
│                                             │
├─────────────────────────────────────────────┤
│               ENTER SADANLEARN              │
│             [ Enter LMS ]                   │
├─────────────────────────────────────────────┤
│ Footer                                      │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 45. Important Design Rule

Do not start by designing the dashboard.

Start with:

1.  School identity
2.  Landing page
3.  Design system
4.  Student dashboard
5.  Teacher dashboard
6.  Admin dashboard

The landing page establishes the emotional identity of the entire
product.

The dashboard then becomes a functional extension of that identity.

------------------------------------------------------------------------

# 46. Initial Project Setup

Antigravity should initialize:

``` bash
npx create-next-app@latest sadanlearn
```

Choose:

``` text
TypeScript: Yes
ESLint: Yes
Tailwind: Yes
App Router: Yes
src/: Yes
Turbopack: Yes
Import alias: @/*
```

Then install:

``` bash
npm install @supabase/supabase-js @supabase/ssr
npm install prisma @prisma/client
npm install zod react-hook-form @hookform/resolvers
npm install lucide-react
npm install date-fns
npm install mathjs
```

Add shadcn/ui.

Use the current official shadcn installation flow rather than
hard-coding an outdated command.

------------------------------------------------------------------------

# 47. Environment Variables

Use:

``` text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
DIRECT_URL=
AI_API_KEY=
```

Never commit `.env`.

Commit:

``` text
.env.example
```

------------------------------------------------------------------------

# 48. Git Workflow

Use:

``` text
main
develop
feature/*
```

Example:

``` text
feature/auth
feature/student-dashboard
feature/notes
feature/homework
feature/planner
feature/math
feature/landing-page
```

No direct pushes to `main`.

Use pull requests.

------------------------------------------------------------------------

# 49. Development Phases

## Phase 0 --- Requirements

Before coding:

-   Meet school
-   Confirm classes
-   Confirm subjects
-   Confirm roles
-   Confirm workflows
-   Collect official assets
-   Validate feature priorities

## Phase 1 --- Design

Create:

-   User journeys
-   Sitemap
-   Wireframes
-   Color system
-   Typography
-   Landing page
-   Dashboard designs
-   ER diagram

## Phase 2 --- Foundation

Build:

-   Next.js
-   Supabase
-   Prisma
-   Auth
-   RBAC
-   Design system
-   Deployment

## Phase 3 --- Core LMS

Build:

-   Classes
-   Subjects
-   Notes
-   Homework
-   Submissions
-   Announcements

## Phase 4 --- Student Experience

Build:

-   Study planner
-   Learning hub
-   Study tips
-   Language learner

## Phase 5 --- AI

Build:

-   Math Solver
-   Language assistant
-   Optional study assistant

## Phase 6 --- Career

Build:

-   Career Corner
-   Scholarships
-   Competitions
-   Government opportunities

## Phase 7 --- Testing

Test:

-   Authentication
-   Authorization
-   File uploads
-   Homework
-   Submissions
-   Planner
-   AI
-   Mobile UI
-   Accessibility

## Phase 8 --- Pilot

Launch to:

-   1--2 classes
-   2--3 teachers

Gather feedback.

Then improve.

------------------------------------------------------------------------

# 50. Testing Strategy

## Functional

Every user flow must work.

## Authorization

Test:

``` text
Student cannot access teacher pages.
Student cannot modify another student's submission.
Teacher cannot modify another teacher's classes.
Teacher cannot access admin pages.
```

## File

Test:

-   Valid PDF
-   Invalid extension
-   Oversized file
-   Broken upload
-   Unauthorized download

## AI

Test:

-   Normal math
-   Invalid math
-   Non-math question
-   Prompt injection
-   Excessive requests

## UI

Test:

-   Mobile
-   Tablet
-   Desktop
-   Keyboard navigation

------------------------------------------------------------------------

# 51. Acceptance Criteria

The MVP is considered complete when:

### Student

-   Can log in
-   Can see assigned class
-   Can view notes
-   Can download notes
-   Can see homework
-   Can submit homework
-   Can see announcements
-   Can create study plan
-   Can use learning hub

### Teacher

-   Can log in
-   Can see assigned classes
-   Can upload notes
-   Can create homework
-   Can view submissions
-   Can publish announcements

### Admin

-   Can manage users
-   Can manage classes
-   Can manage subjects
-   Can manage educational content

### System

-   Works on mobile
-   Has secure authorization
-   Uses server-side validation
-   Deploys successfully
-   Handles loading/errors
-   Does not expose secrets

------------------------------------------------------------------------

# 52. Antigravity Coding Rules

Antigravity must follow these rules:

1.  Use TypeScript throughout.
2.  Do not use `any` unless absolutely unavoidable.
3.  Keep components small.
4.  Keep business logic outside UI components.
5.  Use server actions for mutations where appropriate.
6.  Use route handlers for API-style endpoints.
7.  Validate all external input with Zod.
8.  Never expose secrets to the browser.
9.  Never trust client-side roles.
10. Keep database access centralized.
11. Use Prisma for application database access.
12. Use Supabase Storage for files.
13. Do not store files directly in PostgreSQL.
14. Do not introduce unnecessary libraries.
15. Do not create an Express backend.
16. Do not create microservices.
17. Do not implement features outside the MVP without approval.
18. Maintain responsive design.
19. Maintain accessibility.
20. Use the design tokens defined in this document.
21. Do not use generic AI-dashboard styling.
22. Do not fabricate school information.
23. Use placeholder content where official school information has not
    been verified.
24. Keep the landing page and LMS visually connected but structurally
    distinct.
25. Every feature must include loading, empty, error, and success
    states.

------------------------------------------------------------------------

# 53. Initial Seed Data

Create development-only seed data.

Example:

``` text
Admin:
admin@sadanlearn.local

Teacher:
teacher@sadanlearn.local

Student:
student@sadanlearn.local
```

Classes:

``` text
6A
7A
8A
9A
10A
```

Subjects:

``` text
English
Kannada
Hindi
Mathematics
Science
Social Science
```

Use clearly fake development accounts.

Never seed real student information.

------------------------------------------------------------------------

# 54. Initial Demo Scenario

The finished prototype should demonstrate:

``` text
Visitor
 ↓
Landing page
 ↓
Enter LMS
 ↓
Student login
 ↓
Student dashboard
 ↓
View Mathematics notes
 ↓
Open homework
 ↓
Submit homework
 ↓
Open Study Planner
 ↓
Generate plan
 ↓
Use Math Solver
 ↓
Use Language Learner
 ↓
Return to dashboard
```

Then demonstrate teacher:

``` text
Teacher login
 ↓
Teacher dashboard
 ↓
Upload note
 ↓
Create homework
 ↓
View student submission
```

Then admin:

``` text
Admin login
 ↓
Admin dashboard
 ↓
Manage class
 ↓
Manage teacher
 ↓
Publish educational content
```

------------------------------------------------------------------------

# 55. Service-Learning Impact

The project should eventually measure:

-   Number of students using the platform
-   Number of notes uploaded
-   Number of homework assignments
-   Homework submission rate
-   Study planner usage
-   Learning resource usage
-   Teacher satisfaction
-   Student satisfaction

The final report should compare:

``` text
BEFORE

Notes scattered
Homework communication inconsistent
Study planning manual
Learning resources scattered

AFTER

Centralized notes
Centralized homework
Digital planning
Supplementary learning resources
Language support
Math assistance
Career awareness
```

------------------------------------------------------------------------

# 56. Final Product Positioning

Do not present SadanLearn as:

> "An LMS built with Next.js."

Present it as:

> **"A school-specific digital learning and student-support platform
> designed to improve access to academic resources, simplify
> teacher-student communication, encourage self-directed learning, and
> provide students with practical educational tools."**

That is the correct service-learning story.

------------------------------------------------------------------------

# 57. Final Technology Decision

Lock the following stack for V1:

``` text
Frontend:
Next.js 16
React
TypeScript
Tailwind CSS
shadcn/ui
Lucide React

Backend:
Next.js Server Actions
Next.js Route Handlers
Zod

Database:
Supabase PostgreSQL
Prisma

Authentication:
Supabase Auth

Storage:
Supabase Storage

AI:
Gemini or OpenAI

Math:
math.js

Deployment:
Vercel

Repository:
GitHub

Design:
Poppins
School-derived Pink / Terracotta / Navy palette
Editorial public website
Functional but school-branded LMS
```

Avoid adding:

``` text
Express
MongoDB
Redis
Docker
Kubernetes
GraphQL
Microservices
Separate backend server
Separate auth provider
Separate file storage provider
```

unless a future requirement genuinely demands them.

------------------------------------------------------------------------

# 57A. Design Implementation Requirements

Antigravity must treat the design system as a first-class requirement.

Before implementing feature pages:

1. Create CSS variables/design tokens for the school palette.
2. Configure Poppins as the primary font.
3. Create reusable Button, Card, Badge, SectionHeading, Navigation, and Container components.
4. Build the public landing-page shell first.
5. Build the LMS shell second.
6. Verify the UI against the supplied school photograph and palette.
7. Keep school imagery intentional and properly cropped.
8. Do not replace approved school imagery with generic stock imagery.
9. Keep terracotta as the principal action color.
10. Keep navy as the principal structural color.
11. Use soft pink and warm cream for visual warmth.
12. Use calm blue sparingly.
13. Keep shadows soft and subtle.
14. Prefer 8–16px corner radii rather than extreme rounded cards.
15. Use consistent warm-neutral borders.
16. Use Lucide React consistently for UI icons.
17. Do not use emoji as primary production UI icons.
18. Use subtle motion only where it improves usability.
19. Keep the landing page and LMS visually connected.
20. Do not let individual pages invent their own palette.

Suggested tokens:

```css
:root {
  --primary: #F4C7C3;
  --secondary: #C75A4B;
  --primary-dark: #12324D;
  --accent-blue: #2C5D7D;
  --background: #FAF7F3;
  --surface: #FFFFFF;
  --soft-pink: #F8DDD9;
  --border: #E6D9D4;
  --text: #1F2328;
  --text-muted: #64748B;
  --success: #2E7D32;
  --warning: #F59E0B;
  --error: #C62828;
}
```

These may be mapped into Tailwind/shadcn design tokens rather than used literally throughout components.

### LMS Reference Requirement

The supplied EduAdmin/EduLearn screenshot must be treated as the authenticated LMS visual reference.

The implementation should reproduce its **design principles**:

- Persistent sidebar navigation
- Dashboard summary cards
- Featured learning panel
- Resource/course cards
- Optional analytics
- Profile/information area
- Strong grid-based layout
- Responsive behavior

The SadanLearn color system remains authoritative.

---


# 57B. Dribbble Design Reference & Adaptation Rules

## Reference

Use the following Dribbble shot as the primary **landing-page design inspiration**:

**School Landing Page — mula rahman**
https://dribbble.com/shots/27633624-School-Landing-Page

The reference uses a restrained, editorial school-website aesthetic with a light cool canvas, dark typography, muted blue-gray supporting tones, and warm brown/taupe accents. The published shot also exposes its palette, including `#EBECF5`, `#06080A`, `#BAC6D3`, `#4B4948`, `#A9B3CE`, `#586F95`, `#9C7D6C`, and `#969AAA`. The reference should be treated as **visual inspiration rather than a color source for SadanLearn**. citeturn1view0

## What to take from the reference

Antigravity should study and adapt these principles:

- Strong editorial composition rather than generic SaaS sections
- Generous whitespace
- Large, confident typography
- Clear visual hierarchy
- Image-led storytelling
- Restrained card usage
- Strong section transitions
- Sophisticated neutral surfaces
- Clear CTA hierarchy
- School identity presented as the primary product story
- Modern but not overly technological visual language

## What NOT to copy

Do not reproduce the Dribbble design pixel-for-pixel. Do not copy its:

- Exact layout
- Exact typography treatment
- Exact illustrations
- Exact imagery
- Exact spacing system
- Exact components
- Exact color palette
- Branding or logos

The final design must be an original SadanLearn implementation.

## Identity Adaptation

The visual hierarchy is:

```text
Dribbble reference
        ↓
Editorial composition + UX sophistication
        ↓
Sanjoe Sadan school identity
        ↓
Pink + Terracotta + Navy + Warm Cream palette
        ↓
SadanLearn product functionality
```

The supplied school-building photograph remains the source of truth for brand colors. The Dribbble shot influences **composition and visual sophistication**, not branding.

## Landing Page Composition

The final SadanLearn landing page should combine the reference's editorial feel with the actual school building.

### Hero

Use a large asymmetric composition:

```text
--------------------------------------------------
| Logo       School     Learning     [Enter LMS] |
--------------------------------------------------
|                                                |
| Nurturing minds.                               |
| Building futures.                              |
|                                                |
| Short school/platform introduction.            |
|                                                |
| [ Enter Learning Portal ]  [ Explore School ]  |
|                              ┌───────────────┐ |
|                              │ SCHOOL PHOTO  │ |
|                              │               │ |
|                              └───────────────┘ |
--------------------------------------------------
```

The hero should feel like a school institution website first and a software product second.

### Content Rhythm

Use alternating visual rhythms rather than repeating identical cards:

```text
Hero
 ↓
School story + image
 ↓
Learning pillars
 ↓
Full-width visual / school-life section
 ↓
SadanLearn feature preview
 ↓
Learning beyond textbooks
 ↓
Strong LMS CTA
 ↓
Footer
```

### Feature Presentation

Do not show every LMS feature as a dashboard card on the landing page. Instead, group them into stories:

**Learn**
Notes, homework, quizzes

**Plan**
Study planner, deadlines, exam preparation

**Explore**
Fun facts, health, sports, learning resources

**Grow**
Languages, Math Solver, career opportunities

This keeps the landing page elegant while the LMS itself can expose detailed navigation.

## Photography Treatment

The supplied school-building photograph should be presented as a premium editorial image, not as a generic rectangular card. Consider:

- Large image crop
- Slight rounded corners
- Warm cream surrounding space
- Thin neutral border
- Subtle shadow
- Optional terracotta caption/accent

Do not heavily filter or recolor the photograph.

## Motion

Borrow the reference's sense of polish through subtle motion, not excessive animation:

- Hero image reveal
- Section fade/slide reveal
- Navigation transition
- Button hover
- Image hover scale of approximately 1.02–1.04
- Smooth page transitions where appropriate

Keep motion fast and restrained.

## LMS Adaptation

The LMS should inherit the reference's visual sophistication but become more functional:

- Navigation/sidebar becomes denser
- Cards become information-oriented
- Tables/lists are allowed where useful
- Forms prioritize speed and clarity
- Dashboard widgets remain restrained
- School colors remain visible throughout

The LMS should feel like the same brand, not the same page.

## Design Approval Gate

Before Antigravity builds the complete application, it should first produce and review these three screens:

1. Public landing page
2. Student dashboard
3. Teacher dashboard

Only after the visual system is approved should the team implement the remaining modules.

---

# 58. First Development Task for Antigravity

Do not immediately build every feature.

First create:

``` text
1. Next.js application
2. Design system
3. Public landing page
4. Supabase connection
5. Prisma schema
6. Authentication
7. RBAC
8. Student dashboard shell
9. Teacher dashboard shell
10. Admin dashboard shell
```

Then implement the core LMS modules one at a time.

The first milestone should be:

> **A polished public school website + working authentication +
> role-specific empty dashboards + connected Supabase database.**

Only after that milestone is stable should Notes and Homework be
implemented.


---

# 59. Visual Reference Note

The school-building photograph supplied during project planning is the primary visual reference for the initial SadanLearn identity.

The resulting design direction is:

**Soft Pink + Terracotta + Deep Navy + Calm Blue + Warm Cream + Dark Charcoal**

This should be refined if the school later provides official brand guidelines, logo files, crest artwork, stationery, or other approved visual assets.

---

# 60. LMS Visual Reference Note

The uploaded EduAdmin/EduLearn dashboard screenshot is the primary visual inspiration for the authenticated SadanLearn LMS.

Use it to guide:

- Layout
- Navigation
- Dashboard hierarchy
- Card density
- Resource presentation
- Information architecture
- Responsive behavior

Do not copy its branding or exact visual implementation.

The SadanLearn identity remains:

**Soft Pink + Terracotta + Deep Navy + Calm Blue + Warm Cream + Dark Charcoal**

The public website uses the previously specified Dribbble **School Landing Page** as its design inspiration, while the authenticated LMS uses the supplied EduAdmin/EduLearn dashboard as its structural inspiration.

Together:

```text
School building
      ↓
Brand identity / colors
      ↓
Dribbble school landing page
      ↓
Public website experience

EduAdmin/EduLearn LMS
      ↓
Dashboard structure / UX patterns
      ↓
SadanLearn color system
      ↓
Authenticated LMS experience
```

This creates a coherent product while giving the public website and LMS their own appropriate visual personalities.

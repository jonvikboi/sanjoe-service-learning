# SadanLearn — Sanjoe Sadan Convent School LMS

<div align="center">

![SadanLearn School Campus](/public/images/school/building.jpg)

### **Learn. Plan. Explore. Grow.**

*A digital learning and student-support platform designed for Sanjoe Sadan Convent School, Bengaluru.*

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-ORM_6-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_%26_Storage-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com/)

</div>

---

## 📖 About the Project

**SadanLearn** is a dedicated service-learning technology initiative developed for **Sanjoe Sadan Convent School**, located in Banashankari 6th Stage, 10th Block, Hemmigepura, Bengaluru, Karnataka.

Rather than functioning like a generic, complex enterprise LMS, SadanLearn is tailored specifically to the school's day-to-day academic workflow for grades 6 through 10. It centralizes verified classroom notes, provides clear homework tracking, generates deterministic daily study plans, and offers practical self-learning tools (Language Lab for Kannada, Hindi & English, and a step-by-step Math Solver).

### 🎯 Service-Learning Mission

- **Academic Centralization:** Ensure every student has equal access to high-quality chapter revision notes, worksheets, and syllabus resources without reliance on informal chat groups.
- **Clear Communication:** Eliminate missed homework deadlines through a unified timeline for assignments, instructions, and teacher feedback.
- **Empower Self-Directed Study:** Equip students with deterministic study schedules, multilingual vocabulary practice, and verified government scholarship & Olympiad opportunities.

---

## 🏛️ Design Identity & Visual System

The design identity is derived from the architecture and physical presence of the Sanjoe Sadan school building:

<div align="center">

| Color Name | Hex Code | Visual Swatch | Primary Role |
| :--- | :---: | :---: | :--- |
| **Deep Navy** | `#12324D` | `rgb(18, 50, 77)` | LMS Sidebar, high-contrast typography, structure |
| **Secondary Terracotta** | `#C75A4B` | `rgb(199, 90, 75)` | Primary CTA buttons, active state indicators, progress highlights |
| **Primary Soft Pink** | `#F4C7C3` | `rgb(244, 199, 195)` | Highlight cards, hero accents, decorative surfaces |
| **Calm Blue** | `#2C5D7D` | `rgb(44, 93, 125)` | Secondary buttons, academic tags, informational status |
| **Warm Cream** | `#FAF7F3` | `rgb(250, 247, 243)` | Primary website background & dashboard canvas |
| **Dark Charcoal** | `#1F2328` | `rgb(31, 35, 40)` | Clean readable body copy |

</div>

**Typography:**
- **Primary Interface Font:** [Poppins](https://fonts.google.com/specimen/Poppins) (`400`, `500`, `600`, `700`)
- **Editorial Headings:** [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) (`400`)

---

## 🌟 Platform Experiences

SadanLearn is split into two interconnected experiences:

### 1. Public School Website (`/`)
An editorial school landing page featuring:
- **School Campus Hero:** Authentic campus photography with strong typography and clear entry CTAs.
- **About the School:** Institutional context, discipline values, and service-learning vision.
- **Four Learning Pillars:** *Learn* (Curriculum), *Plan* (Time Management), *Explore* (Curiosity), and *Grow* (Multilingual & Career Readiness).
- **Student Experience & Extracurriculars:** Day-to-day LMS benefits, state languages, and science trivia.
- **LMS Interactive Preview & Final CTA:** Visual transition into the authenticated portal.

### 2. Authenticated LMS (`/student/*`, `/teacher/*`, `/admin/*`)
A focused, distraction-free academic workspace:
- **Student Portal:** Personalized greeting, daily study task checklist, Today's Learning panel, subject cards, homework deadlines rail, Language Lab, Math Solver, and Career Corner.
- **Teacher Portal:** Quick action uploader (Notes, Assignments, Announcements), class roster management, submission progress tracking, and homework grading console.
- **Admin Portal:** Student and teacher directory management, class and section configurations, syllabus catalog, content moderation, and live system audit logs.

---

## 🛠️ Technology Stack

```text
Frontend:
  ├── Next.js 16 (App Router + Turbopack)
  ├── React 19
  ├── TypeScript (Strict Mode)
  ├── Tailwind CSS v4 (Theme tokens & custom properties)
  └── Lucide React Icons

Backend & Data:
  ├── Next.js Server Actions & Route Handlers
  ├── Prisma ORM 6 (PostgreSQL Client)
  ├── Supabase PostgreSQL (Managed Relational DB)
  ├── Supabase Auth & Supabase Storage
  └── Zod (Server-side schema validation)

AI Architecture (Phase 5):
  ├── Provider Abstraction (Groq / NVIDIA NIM / Gemini)
  └── Deterministic First Math.js Pipeline
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `v20+` or `v24+`
- **npm:** `v10+` or `v11+`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jonvikboi/sanjoe-service-learning.git
   cd sanjoe-service-learning
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example configuration file:
   ```bash
   cp .env.example .env.local
   ```
   Configure your Supabase and PostgreSQL database credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-public-key"
   DATABASE_URL="postgresql://postgres:password@db.your-project.supabase.co:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://postgres:password@db.your-project.supabase.co:5432/postgres"
   ```

4. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
sanjoe-service-learning/
├── public/
│   └── images/
│       └── school/
│           └── building.jpg        # Authentic Sanjoe Sadan campus photograph
├── prisma/
│   └── schema.prisma               # 18 relational models & enums
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with Poppins & DM Serif Google Fonts
│   │   ├── globals.css             # Design tokens & color theme variables
│   │   ├── page.tsx                # Public School Website Landing Page (/)
│   │   ├── login/                  # Authentication & Demo Role Switcher (/login)
│   │   ├── student/                # Student LMS routes & dashboards
│   │   ├── teacher/                # Teacher LMS routes & dashboards
│   │   └── admin/                  # Administrator LMS routes & dashboards
│   ├── components/
│   │   ├── ui/                     # Reusable Button, Card, Badge, Input
│   │   ├── landing/                # Hero, About, Pillars, Experience, LMS Preview, Footer
│   │   ├── dashboard/              # StatCard, FeaturedLearning, SubjectCard, HomeworkCard, RecentNotes
│   │   ├── navigation/             # PublicNavbar, LmsSidebar, LmsTopbar
│   │   └── shared/                 # Container, SectionHeading, EmptyState, RoleSwitcherBanner
│   ├── lib/
│   │   ├── utils.ts                # Class merging & date formatting
│   │   ├── prisma.ts               # Prisma singleton client
│   │   ├── supabase/               # Supabase browser & server SSR helpers
│   │   ├── ai/                     # AI provider interfaces & offline mock
│   │   └── mock-data/              # Isolated mock data for development
│   └── types/                      # Central TypeScript interfaces
├── docs/
│   ├── AI_SETUP.md                 # AI integration guide for Phase 5
│   └── DEVELOPMENT_HANDOFF.md      # Detailed developer handoff guide
├── .env.example                    # Environment configuration template
└── README.md
```

---

## 🗺️ Route Directory

| Route Path | Description | Access Role |
| :--- | :--- | :--- |
| `/` | Public School Website & SadanLearn Introduction | Public |
| `/login` | Authentication Portal & Instant Role Switcher | Public |
| `/student/dashboard` | Student Learning Dashboard | Student |
| `/student/classes` | Enrolled Timetable & Subject Teachers | Student |
| `/student/notes` | Subject Revision Notes & PDF Worksheets | Student |
| `/student/homework` | Active Assignments & Submission Portal | Student |
| `/student/planner` | Deterministic Study Schedule Generator | Student |
| `/student/learning` | Curated Knowledge & Science Discovery Hub | Student |
| `/student/languages` | Kannada, Hindi & English Language Lab | Student |
| `/student/math` | Step-by-Step Math Solver Assistant | Student |
| `/student/opportunities` | Career Corner, NMMS & STEM Olympiads | Student |
| `/teacher/dashboard` | Teaching Faculty Dashboard | Teacher |
| `/teacher/notes` | Notes Repository & PDF Uploader | Teacher |
| `/teacher/homework` | Assignment Creator & Deadline Manager | Teacher |
| `/teacher/submissions` | Submission Review & Grading Console | Teacher |
| `/teacher/announcements` | Urgent Classroom Notice Broadcast | Teacher |
| `/teacher/content` | Knowledge Hub Content Publisher | Teacher |
| `/admin/dashboard` | School Administrative Console | Admin |
| `/admin/students` | Student Directory & Enrollment Records | Admin |
| `/admin/teachers` | Faculty Roster & Subject Allocations | Admin |
| `/admin/classes` | Classroom & Section Configurations | Admin |
| `/admin/subjects` | State Syllabus & Subject Management | Admin |
| `/admin/content` | Content Moderation & Career Postings | Admin |

---

## 👥 Development Guidelines for Team Members

1. **Design Token Consistency:** Always inherit colors from `globals.css` or use the official school tokens (`#12324D`, `#C75A4B`, `#F4C7C3`, `#FAF7F3`). Avoid hardcoded random colors.
2. **Server-Side Security:** Perform database mutations and storage uploads in Server Actions or Route Handlers. Never expose API secrets or private database strings to the client.
3. **Data Validation:** Validate all incoming parameters with [Zod](https://zod.dev).
4. **Handoff Documentation:** Read [docs/DEVELOPMENT_HANDOFF.md](docs/DEVELOPMENT_HANDOFF.md) and [docs/AI_SETUP.md](docs/AI_SETUP.md) before implementing feature modules.

---

## 📜 License

Developed as a service-learning project for **Sanjoe Sadan Convent School, Bengaluru**.

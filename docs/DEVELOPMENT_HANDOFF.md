# SadanLearn — Foundation & Developer Handoff Document

> **Platform:** SadanLearn — Sanjoe Sadan Convent School LMS  
> **Repository Base:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma, Supabase  
> **Status:** Phase 2 Foundation Complete — Ready for Feature Team Members

---

## 1. Executive Summary

This repository contains the foundation for **SadanLearn**, a service-learning project built for **Sanjoe Sadan Convent School, Bengaluru**.

The initial foundation establishes:
1. **School-Derived Design System:** Strict adherence to the school building identity (Soft Pink `#F4C7C3`, Terracotta `#C75A4B`, Deep Navy `#12324D`, Calm Blue `#2C5D7D`, Warm Cream `#FAF7F3`, and dark text `#1F2328`) with Poppins and DM Serif Display typography.
2. **Public School Landing Page (`/`):** 9-section editorial school landing page inspired by modern editorial school showcases.
3. **LMS Visual Shell:** Persistent desktop sidebar + mobile collapsible drawer + topbar + summary cards inspired by the EduAdmin/EduLearn layout pattern.
4. **Dashboard Shells:**
   - **Student Dashboard:** `/student/dashboard`
   - **Teacher Dashboard:** `/teacher/dashboard`
   - **Admin Dashboard:** `/admin/dashboard`
5. **Route Placeholders:** Complete set of 19 role-specific route pages for team feature development.
6. **Backend / Data Readiness:** Prisma relational schema with 18 models, Supabase client/server helpers, and mock data repository.
7. **AI Foundation:** Provider abstractions in `src/lib/ai/` and `docs/AI_SETUP.md`.

---

## 2. Project Architecture & Directory Layout

```text
sanjoe-service-learning/
├── public/
│   └── images/
│       └── school/
│           └── building.png        # Authentic Sanjoe Sadan School Building photograph
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root Layout with Poppins & DM Serif Display Google Fonts
│   │   ├── globals.css             # Design tokens & color theme variables
│   │   ├── page.tsx                # Public School Website Landing Page (/)
│   │   ├── login/                  # Authentication entry portal (/login)
│   │   ├── student/                # Student LMS routes (/student/*)
│   │   │   ├── dashboard/          # Student Dashboard Shell
│   │   │   ├── classes/            # Enrolled Classes & Timetable
│   │   │   ├── notes/              # Notes & PDF downloads
│   │   │   ├── homework/           # Homework & Submission portal
│   │   │   ├── planner/            # Deterministic Study Planner
│   │   │   ├── learning/           # Learning & Discovery Hub
│   │   │   ├── languages/          # Kannada, Hindi & English Lab
│   │   │   ├── math/               # Step-by-Step Math Solver
│   │   │   └── opportunities/      # Career Corner & Scholarships
│   │   ├── teacher/                # Teacher LMS routes (/teacher/*)
│   │   │   ├── dashboard/          # Teacher Dashboard Shell
│   │   │   ├── notes/              # Notes upload & management
│   │   │   ├── homework/           # Assignment creator & deadline manager
│   │   │   ├── submissions/        # Submission review & grading console
│   │   │   ├── announcements/      # Classroom notice broadcast
│   │   │   └── content/            # Educational content publishing
│   │   └── admin/                  # Administrator LMS routes (/admin/*)
│   │       ├── dashboard/          # Admin Dashboard Shell
│   │       ├── students/           # Student directory & enrollments
│   │       ├── teachers/           # Faculty & subject assignments
│   │       ├── classes/            # Class & section setups
│   │       ├── subjects/           # Subject & syllabus management
│   │       └── content/            # Knowledge Hub & Career moderation
│   ├── components/
│   │   ├── ui/                     # Reusable Button, Card, Badge, Input
│   │   ├── landing/                # Hero, About, Pillars, StudentExp, BeyondClass, LmsPreview, CTA, Footer
│   │   ├── dashboard/              # StatCard, FeaturedLearningCard, SubjectCard, HomeworkCard, RecentNoteCard, QuickActionCard, ModulePlaceholder
│   │   ├── navigation/             # PublicNavbar, LmsSidebar, LmsTopbar
│   │   └── shared/                 # Container, SectionHeading, EmptyState, LoadingState, RoleSwitcherBanner
│   ├── lib/
│   │   ├── utils.ts                # Class merge utility (cn) & date formatting
│   │   ├── prisma.ts               # Prisma singleton client
│   │   ├── supabase/               # Supabase browser & server clients
│   │   ├── ai/                     # AI provider contract & mock implementation
│   │   └── mock-data/              # Isolated mock data for students, teachers, admin, school info
│   └── types/                      # Central TypeScript interfaces & enums
├── prisma/
│   └── schema.prisma               # Complete PostgreSQL relational schema
├── docs/
│   ├── AI_SETUP.md                 # AI integration guide for Phase 5
│   └── DEVELOPMENT_HANDOFF.md      # This handoff documentation
└── .env.example                    # Environment variable template
```

---

## 3. How to Run the Project Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify TypeScript & Linting:**
   ```bash
   npm run build
   npm run lint
   ```

---

## 4. Design System Tokens & Brand Colors

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Pink** | `#F4C7C3` | Decorative surfaces, accent cards, hero glow |
| **Terracotta** | `#C75A4B` | Primary action buttons, active tabs, highlights |
| **Deep Navy** | `#12324D` | Sidebar, navigation headers, titles, high-emphasis UI |
| **Calm Blue** | `#2C5D7D` | Secondary links, badges, information status |
| **Warm Cream** | `#FAF7F3` | Main public site background, dashboard canvas |
| **Dark Text** | `#1F2328` | Primary body typography |
| **School Border** | `#E6D9D4` | Subtle card & layout divider borders |

Typography is configured globally via Next.js Google Fonts:
- **Primary UI:** `Poppins` (`font-sans`)
- **Editorial Headings:** `DM Serif Display` (`font-serif`)

---

## 5. Team Feature Division & Integration Points

### 1. Authentication & Role-Based Routing (`/login`, middleware)
- **Current State:** `/login` contains quick demo buttons to instantly test Student, Teacher, and Admin dashboards without requiring database credentials.
- **Integration Task:** Connect `@supabase/ssr` login action in `src/app/login/page.tsx` with Supabase Auth, verify user role from `User` table, and redirect to `/${role.toLowerCase()}/dashboard`.

### 2. Notes Module (`/student/notes`, `/teacher/notes`)
- **Current State:** UI shells, mock card previews, and `RecentNoteCard` components exist.
- **Integration Task:** Create Server Action `uploadNoteAction()` using `src/lib/supabase/server.ts` to upload PDFs to Supabase Storage bucket `notes` and insert metadata via `prisma.note.create()`.

### 3. Homework & Submissions (`/student/homework`, `/teacher/homework`, `/teacher/submissions`)
- **Current State:** Homework cards, submission progress bars, and teacher review queues styled with mock data.
- **Integration Task:** Wire up `prisma.homework` and `prisma.submission` queries to display real classroom assignments and student upload receipts.

### 4. Study Planner (`/student/planner`)
- **Current State:** Feature placeholder shell ready.
- **Integration Task:** Implement deterministic scheduling algorithm using student's exam date and subject weights, saving tasks to `prisma.studyTask`.

### 5. AI Features (Math Solver & Language Lab)
- **Current State:** Architecture defined in `src/lib/ai/provider.ts` and `src/lib/ai/mock.ts`. See `docs/AI_SETUP.md`.
- **Integration Task:** Connect Groq/NVIDIA/Gemini API in Next.js Route Handlers.

---

## 6. Development Rules for Team Members

1. **Do not modify the color palette:** Inherit styles from `globals.css` or use standard design tokens (`#12324D`, `#C75A4B`, `#F4C7C3`, `#FAF7F3`).
2. **Keep UI small and modular:** Place reusable cards in `src/components/dashboard/` or `src/components/cards/`.
3. **No client-side DB secrets:** Perform all Prisma and external API queries in Server Actions or Route Handlers.
4. **Use Zod for input validation:** Validate all form submissions and file uploads server-side.

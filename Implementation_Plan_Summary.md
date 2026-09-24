# SadanLearn — Final Team Assignment

| Member | Person | Role | Branch |
|---|---|---|---|
| 1 | Joshua Zachary Jose | Project Lead + Full-Stack Architect | `feature/project-foundation` |
| 2 | Shrayana K S | UI/UX + Public Website | `feature/design-system` |
| 3 | Anushka Pravakar | LMS Frontend Engineer | `feature/lms-frontend` |
| 4 | Evan K S | Backend + MongoDB Engineer | `feature/mongodb-backend` |
| 5 | Dean Joah Bell | AI + Learning Features Engineer | `feature/ai-learning` |

## Branch Model

```text
main
│
├── feature/project-foundation  → Joshua Zachary Jose
├── feature/design-system       → Shrayana K S
├── feature/lms-frontend        → Anushka Pravakar
├── feature/mongodb-backend     → Evan K S
└── feature/ai-learning         → Dean Joah Bell
```

## Merge Policy

- `main` is the integration branch.
- No direct pushes to `main`.
- Every feature goes through a Pull Request.
- Joshua Zachary Jose reviews and merges PRs.
- Run lint, type-check, and production build before merging.
- Keep feature branches focused.
- Pull/rebase from the latest `main` before submitting a PR.

## Dependency Sequence

1. Joshua Zachary Jose establishes the foundation.
2. Shrayana establishes/refines the design system and public website.
3. Anushka builds the LMS frontend.
4. Evan builds the MongoDB backend and data services.
5. Dean builds AI and learning features.

After the foundation is stable, members can work in parallel.

## Files

- `01_Project_Lead_Architect.md`
- `02_UI_UX_Public_Website.md`
- `03_LMS_Frontend.md`
- `04_Backend_MongoDB.md`
- `05_AI_Learning_Features.md`

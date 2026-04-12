# ScopeLock

A React prototype for freelancer client onboarding. ScopeLock guides clients through a structured intake flow — project type, timeline, budget, and revision policy — then generates a locked scope document both parties agree to before work begins.

## The Problem

Scope creep is one of the most common issues freelancers face. Clients add requests mid-project, expectations get misaligned, and disagreements happen over what was "included." ScopeLock solves this by locking in a clear scope agreement at the very start.

## Features

- Multi-step guided intake form (project type, timeline & budget, revision policy)
- Live progress bar that updates as you move through steps
- Step validation — can't proceed without filling required fields
- Scope review screen summarizing all deliverables
- Locked confirmation screen once both parties approve
- Responsive design (mobile-friendly)
- Smooth fade-in animations between steps

## Tech Stack

- React (functional components + hooks)
- `useState` for form state and view management
- `useEffect` for progress bar syncing
- CSS-in-JSX for styling
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn

### Installation

```bash
npm create vite@latest scope-lock -- --template react
cd scope-lock
npm install
npm install lucide-react
```

Replace the contents of `src/App.jsx` with `scope-lock-prototype.jsx`, then run:

```bash
npm run dev
```

Open the localhost link in your browser.

## Project Structure

```
scope-lock-prototype.jsx
│
├── ScopeLockApp          # Main component
│   ├── welcome           # Landing screen
│   ├── intake1           # Step 1 — Project type
│   ├── intake2           # Step 2 — Timeline & budget
│   ├── intake3           # Step 3 — Revision policy
│   ├── review            # Scope summary screen
│   └── locked            # Confirmation screen
│
└── ProjectTypeCard       # Reusable card component
```

## What's Next (Future Improvements)

- Backend integration for storing scope documents
- User authentication for both freelancer and client
- E-signature integration (DocuSign or HelloSign)
- Email delivery of the locked scope PDF
- Dashboard to manage multiple active projects

## Built With

Learned and built using YouTube tutorials, combining concepts from multiple resources including React hooks, multi-step form patterns, and CSS animation techniques.

---

Made as a school project prototype.

# Protfolio Website — Shourov Gharami

A personal portfolio website built with Vite, React, TypeScript and Tailwind CSS. The site showcases projects, skills, experience and contact information for Shourov Gharami.

## Overview

This repository contains a modern, responsive portfolio site implemented using a Vite + React + TypeScript starter. It is designed to be lightweight, easy to extend, and simple to deploy.

## Technologies Used

- **Framework:** `React` (18)
- **Tooling / Bundler:** `Vite`
- **Language:** `TypeScript`
- **Styling:** `Tailwind CSS` + PostCSS
- **Icons:** `lucide-react`
- **Optional / Integrations:** `@supabase/supabase-js` (added as a dependency)
- **Testing / Linting:** Type-checking with `tsc` and linting via `eslint` (configs included)

## What it contains

- `index.html` — app entry HTML
- `src/` — application source
	- `main.tsx` — app bootstrap
	- `App.tsx` — top-level composition (Navbar → Hero → About → Skills → Projects → Experience → Contact → Footer)
	- `index.css` — Tailwind base + custom utilities
	- `components/` — UI sections: `Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`, `Footer.tsx`
- `public/` — static assets (images like `SHOUROV_GHARAMI.jpg`)
- `vite.config.ts`, `tailwind.config.js`, `postcss.config.js` — build and CSS tool configuration
- `tsconfig.*.json` — TypeScript configuration

## Project Structure (important files)

- `package.json` — scripts and dependencies
- `src/App.tsx` — main app layout
- `src/components/` — page sections and UI components
- `public/SHOUROV_GHARAMI.jpg` — profile image used on the Hero

## Setup & Run (Windows PowerShell)

Install dependencies:

```powershell
npm install
```

Run the dev server:

```powershell
npm run dev
```

Type-check only:

```powershell
npm run typecheck
```

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```



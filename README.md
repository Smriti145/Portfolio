# Smriti Pandey — Midnight Developer Studio

My personal developer portfolio, built to showcase my work, projects, skills, and the things I'm currently building.

The design is intentionally cinematic and interactive, with a dark midnight-style visual system, motion, 3D elements, and a video-based hero section.

## Built With

* Next.js (App Router)
* TypeScript
* CSS Modules
* GSAP
* Three.js

## Run Locally

```bash
npm ci
npm run dev
```

The development server runs locally on `127.0.0.1`.

For a production build:

```bash
npm run build
```

TypeScript can be checked with:

```bash
npm run typecheck
```

The project is configured for static output.

## Project Structure

Most of the portfolio content is kept separate from the UI so it is easy to update.

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── icon.svg
├── robots.ts
└── sitemap.ts

components/
├── About.tsx
├── Contact.tsx
├── Journey.tsx
├── Navigation.tsx
├── ProjectShowcase.tsx
├── ProjectVisual.tsx
├── Scene.tsx
├── Toolkit.tsx
└── VideoHero.tsx

data/
├── profile.ts
└── projects.ts

public/
└── hero/
    ├── poster.jpg
    └── smriti.mp4
```

### Where to edit things

* `data/projects.ts` → projects, tech stacks, descriptions, features and links
* `data/profile.ts` → profile information, skills, journey and social links
* `components/VideoHero.tsx` → hero video and its playback behavior
* `components/Scene.tsx` → Three.js scene
* `app/globals.css` → global styles, fonts and design variables
* `public/hero/` → hero video and poster

## Projects

The portfolio currently includes projects such as **TraceChain**, **Farmio**, and **Anvesha**, along with other work and experiments.

Some project descriptions are based on my resume and project documentation, so the portfolio makes a distinction between what was actually implemented and what was part of the project/case-study work.

For example, Farmio's reviewed source is an HTML/CSS/JavaScript interface with simulated login. Backend authentication and MySQL mentioned in the resume are not presented as implemented features of that public source.

Similarly, Anvesha's case study is based on the supplied project information, while the linked public repository contains a starter React Native application.

No repository or live demo links are added where I don't have a real one.

## Interactive Visuals

The portfolio uses Three.js and GSAP for interactive elements and animations.

The project visuals are **illustrations and interactive simulations**, not screenshots of production systems or connected hardware.

There is also a small keypad interaction included in the portfolio. It uses a demo PIN and automatically resets after a few seconds, so it should not be treated as an actual security system.

## Accessibility & Performance

A few things I kept in mind while building the site:

* Keyboard-friendly links and buttons
* Visible focus states
* Skip-to-content link
* Responsive layouts
* Reduced-motion support
* Video pauses when it is off screen
* Lower particle count on mobile
* Animation pauses when the page is not visible
* Three.js resources are cleaned up when no longer needed
* Hero content remains available without relying entirely on animation

When reduced motion is enabled, the video starts paused and the heavier motion effects are disabled.

## Content & Media

The portfolio uses locally hosted fonts along with the supplied hero video and poster image.

The hero video has no dialogue, so there is no transcript associated with it.
---

Built by **Smriti Pandey**.

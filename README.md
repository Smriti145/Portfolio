# Smriti Pandey — Midnight Developer Studio

A cinematic developer portfolio built with Next.js App Router, TypeScript, CSS Modules, GSAP, and Three.js.

## Local development

```sh
npm ci
npm run dev
```

The preview binds only to 127.0.0.1. `npm run build` creates a static export in `out/`. `npm run typecheck` checks TypeScript.

## Editing

- `data/projects.ts`: project descriptions, features, stacks, source notes, and links.
- `data/profile.ts`: skills, journey, and social links.
- `components/VideoHero.tsx`: video playback and accessibility behavior.
- `components/Scene.tsx`: reusable disposable Three.js scene lifecycle.
- `app/globals.css`: design tokens and locally hosted fonts.
- `public/hero/`: supplied video and extracted poster frame.
- `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`: deployment metadata.

## Content provenance

Education, skills, Anvesha, keypad features, and certifications follow the supplied resume. Certification years follow the approved brief. Contact email and social links were supplied directly. The video contains no dialogue, as confirmed by Smriti; no speech transcript is needed.

TraceChain features follow its public README. Farmio's reviewed source is an HTML/CSS/JavaScript interface with simulated login. MySQL and backend authentication from the resume are not claimed as implemented in that public source. Anvesha's supplied public link currently contains a starter React Native app; its case study is based on the resume, with that distinction visible in a source note. No keypad repository or live demo URL was supplied, so none is invented.

All project visuals are labeled illustrations or interactive simulations. They are not screenshots, live production data, or connected hardware. The keypad demo uses 2027 and automatically relocks after three seconds; it is not a security mechanism.

## Accessibility and performance

Native links and buttons, focus indicators, skip link, responsive layouts, paused offscreen video, reduced-motion support, capped renderer density, mobile particle reduction, visibility-aware animation, and explicit Three.js disposal. With reduced motion, the video starts paused and large motion/pinning is disabled. Essential content is server-rendered.

## Hosting

`.openai/hosting.json` identifies the existing Sites project. The static output is portable to any static host. Update canonical URLs in metadata, robots, and sitemap when changing hosts.

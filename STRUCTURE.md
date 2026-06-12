# Shanaim Shourov — Portfolio

Neo-brutalist single-page portfolio. Fully static Next.js export — no server, no runtime data fetching, ~1.3 MB total output.

## Stack

- **Next.js 16** (App Router, `output: "export"` — pure static HTML/CSS/JS)
- **Tailwind CSS v4** (design tokens in `globals.css` via `@theme`)
- **TypeScript**
- Fonts self-hosted at build time via `next/font` (Archivo Black / Space Grotesk / Space Mono)

## Commands

```bash
npm run dev     # dev server
npm run build   # static export → ./out
npx serve out   # preview the production build
```

Deploy by uploading `out/` to any static host (GitHub Pages, Netlify, Vercel, S3, nginx...).

## Structure — where to add things

```text
src/
├── app/
│   ├── layout.tsx        # fonts + metadata
│   ├── page.tsx          # section order lives here
│   └── globals.css       # design tokens, hard-shadow utilities, keyframes
├── data/                 # ✏️ ALL content lives here — edit these, not components
│   ├── personal.ts       # name, bio, stats, tech stack, competencies, hobbies
│   ├── experience.ts     # jobs (add a new object to the array → new card)
│   ├── skills.ts         # skill levels + ranking legend
│   └── contact.ts        # social links
├── components/
│   ├── sections/         # one file per page section, composed in page.tsx
│   ├── ui/               # reusable primitives: Marquee, Sticker, Tag,
│   │                     # HardButton, SectionHeading, GhostNumber
│   └── effects/          # Reveal (scroll-in), Noise (film grain)
└── lib/types.ts          # shared types
```

**Adding content** (a job, a skill, a hobby, a link) = edit the matching file in `src/data/`. Components render whatever is there.

**Adding a section** = create `src/components/sections/my-section.tsx`, export it from `sections/index.ts`, drop it into `page.tsx`. Use `SectionHeading` + `GhostNumber` + `Reveal` to match the look.

## Design language

Warm paper (`--paper`), ink black (`--ink`), electric orange (`--accent`), klein blue + yellow stickers. 3px borders, hard offset shadows (`shadow-hard*` utilities), Archivo Black display type, mono labels with wide tracking. Tokens are CSS variables in `globals.css` — change the palette in one place.

Only two client components exist (`Reveal`, `SkillLegend`); everything else is server-rendered at build time.

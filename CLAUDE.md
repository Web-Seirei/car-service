@AGENTS.md

# car-service

## Project Snapshot

- Public-facing marketing landing page for the BIP-MOBILE car service.
- Built on Next.js 16 App Router with React 19, TypeScript, and Tailwind CSS v4.
- Current site is primarily a static landing page with conversion-focused sections: services, advantages, workflow, reviews, and contacts.
- Primary business content lives in `src/lib/constants.ts` and `src/lib/data.ts`.
- Main route composition currently centers around `src/app/page.tsx`.
- UI primitives live in `src/components/ui` and follow a shadcn-style approach with `radix-ui`, `class-variance-authority`, and `tailwind-merge`.
- Visual direction is documented in `docs/design-system.md`: warm neutral palette, strong red accent, dark sections, Space Grotesk + JetBrains Mono, no generic cold-blue styling.
- Project is Vercel-ready and uses ESLint + Prettier for quality checks.

## Working Expectations

- Treat this repo as a production-oriented landing page first, not as a generic demo app.
- Preserve the existing structure, copy strategy, and design language unless the task explicitly asks for a redesign.
- Keep changes focused and minimal; do not introduce backend or CMS abstractions unless the task requires them.
- Prefer reusing data from `src/lib/constants.ts` and `src/lib/data.ts` instead of duplicating business copy in components.
- Prefer existing UI primitives from `src/components/ui` before creating new shared components.
- Keep Russian business content and labels consistent with the rest of the project unless the task explicitly requires another language.

## Stack Notes

- Next.js: `16.2.1`
- React / React DOM: `19.2.4`
- Tailwind CSS: `v4`
- Node.js: `>=20.9.0`
- Key UI/runtime libraries already in use: `radix-ui`, `class-variance-authority`, `framer-motion`, `lucide-react`, `react-input-mask`, `@vercel/analytics`, `@vercel/speed-insights`

## Required Documentation Policy

- Always use Context7 before giving guidance, generating code, or making implementation decisions related to any library, framework, package, or external API.
- Do not rely on model memory for library behavior, especially for Next.js 16, React 19, Tailwind CSS v4, `radix-ui`, and Framer Motion.
- Minimum workflow for any library-specific task:
  1.  Resolve the library in Context7.
  2.  Fetch the relevant documentation for the exact topic.
  3.  Check the version used in this repository before proposing code.
  4.  If a newer stable version exists, mention it and call out migration risk only when it is relevant to the task.
- For Next.js work, also follow the repository rule from `AGENTS.md`: read the relevant guide in `node_modules/next/dist/docs/` before changing framework-specific code.

## Common Commands

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run format:check`

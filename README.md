## Car Service

Landing page for a premium auto garage, built with Next.js 16 App Router.

### Stack

- Next.js 16.2.1
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint
- GitHub Actions CI
- Vercel-ready deployment flow

### Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Quality Checks

```bash
npm run lint
npm run build
```

According to the current Next.js 16 docs, `next build` no longer runs lint automatically, so CI executes both steps explicitly.

### CI

The workflow in `.github/workflows/ci.yml` runs on pushes to `main` and on pull requests. It:

- checks out the code
- installs dependencies with `npm ci`
- runs `npm run lint`
- runs `npm run build`

### Deployment

Recommended deployment path for this repository:

1. Import `Web-Seirei/car-service` into Vercel.
2. Keep GitHub as the source of truth.
3. Let Vercel handle production and preview deployments from the connected repo.

This matches the chosen Plan A: GitHub Actions for CI, Vercel for runtime hosting and public URL.

### Version Notes

- Context7 documentation confirms `create-next-app` is the recommended bootstrap path for a new Next.js application.
- Official Next.js installation docs list Node.js `20.9+` as the minimum supported version.
- npm registry currently reports `next@16.2.1` as the latest stable release used in this project.

### Repository

GitHub: `Web-Seirei/car-service`

### Next Step

After the first push succeeds, connect the repository in Vercel to get the production URL.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

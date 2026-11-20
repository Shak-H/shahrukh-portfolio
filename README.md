# Shahrukh Hughes – Portfolio

Personal portfolio for Shahrukh Hughes, a frontend software engineer at iVendi.
The site showcases work in vehicle finance, AI research and mobile ordering.

[Visit the portfolio](https://shahrukhhughes.co.uk)

## Features

- Case studies for PersonAI at Satalia and Marston’s Order & Pay
- Interactive penalty shootout with keyboard controls and reduced-motion support
- Responsive layouts, a skip-to-content link and visible keyboard focus
- Downloadable CV and email contact link

## Tech stack

Next.js App Router, React, TypeScript and Tailwind CSS. Tests use Vitest,
React Testing Library and Playwright.

## Getting started

Use Node.js 22 to match GitHub Actions.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Checks

| Command            | What it runs                           |
| ------------------ | -------------------------------------- |
| `npm run lint`     | ESLint                                 |
| `npm test`         | Vitest component and interaction tests |
| `npm run build`    | Next.js production build               |
| `npm run test:e2e` | Playwright browser tests               |

Install Playwright’s Chromium browser before the first end-to-end run:

```bash
npx playwright install chromium --only-shell
npm run test:e2e
```

Playwright starts the development server. The browser tests cover shootout
button placement at four viewport widths and keyboard focus on a short
viewport.

GitHub Actions runs lint, Vitest, the production build and Playwright on pull
requests and pushes to `main`.

## Project structure

| Path                                 | Purpose                                                            |
| ------------------------------------ | ------------------------------------------------------------------ |
| `app/`                               | Pages, root layout, metadata and global styles                     |
| `app/projects/portfolio-projects.ts` | Project summaries shared by the homepage and projects page         |
| `components/`                        | Shared layouts, navigation, project cards and the penalty shootout |
| `components/ui/`                     | Reusable UI components                                             |
| `e2e/`                               | Playwright browser tests                                           |
| `public/`                            | Shootout assets, CV and social preview image                       |

## Deployment

The site is hosted on Vercel. Pull requests can be checked through their
preview deployments. Merging to the production branch triggers a production
deployment.

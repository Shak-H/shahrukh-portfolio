# Shahrukh Hughes – Portfolio

Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** react-icons (Feather set)

## Features

- Case study pages for PersonAI (Satalia) and Marston's Order & Pay
- Dark mode support via `prefers-color-scheme`
- WCAG accessibility: skip-to-content link, landmarks, screen reader hints, focus-visible outlines
- SEO metadata and Open Graph tags per page
- Client-side email obfuscation to prevent bot scraping
- Downloadable CV

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
app/
  layout.tsx          # Root layout with metadata and skip link
  page.tsx            # Homepage
  contact/page.tsx    # Contact page
  projects/page.tsx   # Projects index
  projects/personai/  # PersonAI case study
  projects/marstons/  # Marston's case study
components/
  Navbar.tsx          # Navigation bar
  ProjectCard.tsx     # Reusable project card
  EmailLink.tsx       # Obfuscated email link
public/
  Shahrukh-Hughes-CV.pdf
```

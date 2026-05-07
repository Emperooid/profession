# Emperooid Portfolio

A modern, highly interactive personal portfolio application built with Next.js 16 and React 19. Designed to showcase projects, services, and professional experience with sleek animations and responsive layouts.

## Features

- **Modern Tech Stack:** Built using Next.js 16 (App Router) and React 19.
- **Sleek Animations:** Powered by `framer-motion` for smooth page transitions (Stairs Animation, Page Animation) and interactive elements.
- **Beautiful UI Components:** Uses headless UI components from Radix UI and icons from `lucide-react` & `react-icons`.
- **Responsive Styling:** Styled with Tailwind CSS v4, utilizing `clsx` and `tailwind-merge` for clean utility class management.
- **Dynamic Portfolios:** Integrates `swiper` for elegant project carousels and `react-countup` for animated statistics.
- **Analytics Ready:** Pre-configured with Vercel Analytics and Speed Insights.
- **Creative Effects:** Custom background effects like `FireFliesBackground`.

## Project Structure

- `app/` - Next.js App Router routes (`/contact`, `/resume`, `/services`, `/work`).
- `components/ui/` - Reusable UI elements (Buttons, Inputs, Tabs, Tooltips, etc.) built on Radix UI.
- `subpages/` - Higher-level components and aesthetic features (Marquee, Socials, Stats, Stairs Animation, etc.).
- `lib/` - Utility functions configuring class merging and more.

## Getting Started

First, install the dependencies (assuming you are using npm, yarn, pnpm, or bun).

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the outcome.

## Key Technologies

- [Next.js](https://nextjs.org) (v16)
- [React](https://react.dev) (v19)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Swiper](https://swiperjs.com/)

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new). The project is pre-configured with Vercel analytics tools for immediate insights upon deployment.

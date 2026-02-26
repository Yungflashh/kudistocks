# KudiStocks — Landing Page

A modern, animated landing page for **KudiStocks** — a smart inventory management system for SMEs.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Sections

1. **Hero** — Animated headline, phone mockup, floating UI cards
2. **About** — Stats cards with animated counters (300k+ downloads, 500k+ users, etc.)
3. **Features** — 6 feature cards with embedded UI mockups
4. **How It Works** — 3-step guide with phone mockups
5. **Testimonials** — 6 business owner reviews
6. **CTA** — Download call-to-action with feature pills
7. **FAQ** — 8 accordion items
8. **Footer CTA** — Email subscription
9. **Footer** — Links, social, giant logo

## Project Structure

```
kudistocks/
├── app/
│   ├── globals.css      # Tailwind + custom animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page composing all sections
├── components/
│   ├── Hero.tsx         # Hero section + Navbar
│   ├── Navbar.tsx       # Responsive navigation
│   ├── Sections.tsx     # All other page sections
│   └── utils.tsx        # Shared hooks & animation components
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

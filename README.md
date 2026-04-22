# Tierra Med Spa — Next.js Clone

A pixel-perfect Next.js 14 clone of [tierra-medspa.com](https://tierra-medspa.com), preserving all original assets, color scheme, fonts, videos, and layout.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS (globals.css)** — fully custom, matching original Webflow styles
- **Fonts:** Inter, Lexend, Playfair Display (Google Fonts)
- **Assets:** All images/videos loaded directly from original Webflow CDN

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
tierra-medspa/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # All site styles (colors, typography, layout)
├── components/
│   ├── Navbar.tsx        # Fixed nav with mobile hamburger menu
│   ├── Hero.tsx          # Full-screen video background hero
│   ├── Results.tsx       # Before/after image carousel
│   ├── HowItWorks.tsx    # LED Technology section
│   ├── Partners.tsx      # Google reviews display
│   ├── Videos.tsx        # Video testimonials carousel
│   ├── AboutUs.tsx       # About section with stats
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── Gallery.tsx       # Photo gallery grid
│   ├── CTA.tsx           # Call-to-action banner
│   └── Footer.tsx        # Footer with links & social
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark-green` | `#4F5B45` | Primary buttons, accents |
| `--color-light-green` | `#8FB573` | Secondary accents |
| `--color-hero-green` | `#A8C48A` | Hero price text |
| `--color-bg-section` | `#F5F3EE` | Section backgrounds |
| `--color-bg-dark` | `#1C1F1A` | Dark sections, footer |
| `--color-text-grey` | `#6B7162` | Body text |

---

## Key Assets

All assets are served from the original Webflow CDN:
- **Hero Video:** `cdn.prod.website-files.com/...garden_opener(1080p)-transcode.mp4`
- **Logo:** `cdn.prod.website-files.com/...download-removebg-preview.jpg`
- **Result images:** 7 before/after JPGs
- **LED device image:** `Frame 527.png`
- **SVG icons:** Arrow, bullet points, limited-time badge

---

## Customisation

- **Booking URL:** Replace `/scheduling` links with your actual booking system URL
- **Contact info:** Update email/phone in `Footer.tsx`
- **Reviews:** Replace the static review cards in `Partners.tsx` with a live Google Places API widget
- **Videos:** Add real testimonial video URLs to `Videos.tsx`

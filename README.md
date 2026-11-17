# ⚡ Creative Developer & Designer Portfolio

> A stunning, modern, and visually engaging personal portfolio website built specifically for a first-year Computer Science Engineering student passionate about code, UI/UX, video editing, branding, and creative problem solving.

---

## 🎨 Design Philosophy & Aesthetic

- **Palette:** Warm cream / off-white background (`#FBF9F5`), deep charcoal typography (`#121316`), vibrant electric blue (`#2563EB`) and playful butter yellow (`#FEF08A` / `#FDE047`) accents.
- **Typography:** Display headings in *Syne* & *Space Grotesk*, crisp readable body copy in *Plus Jakarta Sans*, and code elements in *JetBrains Mono*.
- **Vibe:** A fusion of an editorial graphic designer's portfolio and a software engineer's personal website.

---

## 🚀 Quick Start Guide

### 1. Run the Development Server
In your terminal (inside this folder):
```bash
npm run dev
```
Then open the displayed `http://localhost:5173` link in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Portfolio

You have **two easy ways** to personalize this website:

### Method A: Live in the Browser (Instant Preview)
1. Click the **"Customize Profile"** button in the top navigation or bottom-right corner.
2. Edit your Name, Headline, Bio, Email, and Social links directly in the popup form.
3. Click **"Save & Update"** — the entire website updates instantly and persists across reloads!
4. You can also click **"Copy Code"** in the modal to export your changes.

### Method B: Directly in the Code
Open [`src/data/portfolioData.js`](src/data/portfolioData.js) and update any of the following:
- `personal`: Name, greeting, headline, college status, location, bio.
- `socials`: Email, GitHub, LinkedIn, Instagram links.
- `about`: Story paragraphs, current music flow, quick metrics.
- `skillCategories`: The 5 core skill areas and tool tags.
- `projects`: Add, edit, or remove projects, links, and case study details.
- `experiences`: Add future hackathons, college club activities, and milestones.

---

## 📂 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Floating glass pill navbar & mobile menu
│   │   ├── Hero.jsx                 # Dynamic hero with interactive dual-mode card
│   │   ├── About.jsx                # Story split layout & bento music widget
│   │   ├── Skills.jsx               # 5 honest skill categories & filter tabs
│   │   ├── Projects.jsx             # Filterable project showcase & mockups
│   │   ├── ProjectModal.jsx         # Case study detail modal
│   │   ├── Experience.jsx           # Milestone timeline & activity log
│   │   ├── Contact.jsx              # Direct email copy & interactive contact form
│   │   ├── Footer.jsx               # Editorial footer & back-to-top button
│   │   ├── ProfileEditorModal.jsx   # Live in-browser profile customizer
│   │   └── BrandIcons.jsx           # Pixel-perfect SVG brand icons
│   ├── data/
│   │   └── portfolioData.js         # Centralized configuration & content
│   ├── hooks/
│   │   └── usePortfolioData.js      # LocalStorage persistence & state hook
│   ├── App.jsx                      # Main app composition
│   ├── index.css                    # Tailwind CSS v4 theme & textures
│   └── main.jsx                     # React root mount
├── dist/                            # Production build output
├── index.html                       # HTML entry point with Google Fonts
├── vite.config.js                   # Vite & Tailwind CSS plugins
└── package.json                     # Dependencies & scripts
```

---

## 🌐 Deploying Your Portfolio
You can easily deploy this website for free to:
- **Vercel:** Run `npx vercel` or import your GitHub repository into Vercel.
- **Netlify:** Drag and drop the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop) or link via GitHub.
- **GitHub Pages:** Use the `vite-plugin-gh-pages` or deploy the `dist/` folder.

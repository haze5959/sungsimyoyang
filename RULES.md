# Sungsim Nursing Home Website - Project Rules & Guidelines

## 📌 1. Project Overview
This project is the renewed website for the **Jeju Sungsim Nursing Home** (제주 성심노인요양원). 
The goal of this project was to migrate the legacy PHP-based website to a modern, static web application stack while strictly preserving all original content and informational text. Outdated features like login and community boards have been removed.

**CRITICAL:** The AI assistant MUST read and understand this document before starting any task. Always adhere to the tech stack and guidelines specified below.

---

## 🛠 2. Tech Stack
| Category | Technology |
|---|---|
| **Language** | TypeScript (Strict mode) |
| **Framework** | React 19 + Vite 6 |
| **Routing** | React Router v7 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **SEO** | React Helmet Async |
| **Package Manager** | npm |

*Note: This is a purely static website. There is no backend, no database, no i18n (Korean only), and no external API integrations (except for the Kakao Map embed).*

---

## 🚀 3. Core Routes
| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero carousel, core features, gallery preview, and CTA. |
| **Introduce** | `/introduce` | Greetings, facility introduction, facility info table, interior/exterior photos, and programs. |
| **Guide** | `/guide` | Operating status, organizational chart, costs, regulations, and staff responsibilities. |
| **Consult** | `/consult` | Contact information cards, business card image, and direct call CTA. |
| **Location** | `/location` | Kakao Map embed, static map image, traffic guide, and address info. |

---

## 📁 4. Folder Structure
```text
src/
├── assets/          # Static assets migrated from the legacy site
│   ├── images/      # Facility exterior/interior photos & Hero images
│   ├── programs/    # Program activity photos
│   └── misc/        # Logos, business card, static maps, organization chart
├── components/      # Reusable UI components
│   ├── layout/      # Header (responsive nav) and Footer
│   ├── ui/          # SectionTitle, ImageGallery (with lightbox)
│   └── ScrollToTop.tsx # Route change scroll reset utility
├── pages/           # Route-level components (Home, Introduce, etc.)
├── index.css        # Global CSS & Tailwind v4 theme configuration
├── App.tsx          # React Router configuration
├── main.tsx         # Application entry point
└── vite-env.d.ts    # Type declarations (including uppercase image extensions)
```

---

## 🎨 5. UI & Styling Rules
1. **Tailwind CSS v4:** Use Tailwind utility classes for all styling. Rely on the v4 built-in theme configuration defined in `index.css`.
2. **Brand Color:** The primary brand color is a modern, muted sage/teal green (`#3f9580`). This is tokenized in `index.css` as `primary` and should be used consistently.
3. **Mobile-First Responsive Design:** The target audience includes older users and their families who often access the site via mobile. Ensure touch targets are large enough and text is readable on mobile devices.
4. **Modern Aesthetics:** Employ modern web design techniques such as subtle glassmorphism (backdrop-blur), card-based layouts, and smooth gradients.
5. **Animations:** Use `framer-motion` for scroll animations (e.g., fade-ups when elements enter the viewport) and for smooth UI transitions like mobile menu toggles and image lightboxes.

---

## 📝 6. Content Preservation (CRITICAL)
1. **Never Alter Original Text:** The website contains official information about the facility, regulations, and greetings. **Under no circumstances should the AI rewrite, summarize, or alter the meaning of the original Korean text.**
2. **Hardcoded Text:** Because there is no i18n requirement, Korean text is hardcoded directly into the TSX components.

---

## ⚙️ 7. Coding Conventions
1. **TypeScript Strictness:** Avoid `any`. Define proper interfaces for props and data structures.
2. **Component Structure:** Use functional components exclusively. Keep components clean and modular.
3. **SEO Optimization:** Use the `<Helmet>` component from `react-helmet-async` on every page to define the `<title>` and `<meta name="description">`.
4. **Language:** Keep code comments, commit messages, and Implementation Plans in **Korean (한국어)** as requested by the user, although this RULES.md is in English.

---

## 🤖 8. AI Assistant Guidelines
1. **Context First:** Always review this `RULES.md` to understand the project boundaries (e.g., do not suggest adding a database or backend).
2. **Resource Paths:** Be careful with image paths. Many legacy images use uppercase extensions (e.g., `.JPG`). Ensure imports match the exact file name and extension casing.
3. **Tool Usage:** Use specific tools (e.g., `write_to_file`, `replace_file_content`) rather than bash commands whenever possible.
4. **Design Quality:** Do not settle for basic UI. Always aim for a "premium" and "wow" aesthetic using the defined color palette and animation tools.

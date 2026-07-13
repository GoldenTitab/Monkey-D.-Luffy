# 👒 Monkey D. Luffy Fan Site

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

A fan-made biography website for Monkey D. Luffy, captain of the Straw Hat
Pirates from *One Piece*. Fully redesigned with a light/dark theme switch,
smooth scroll-reveal animations, and a responsive RTL (Persian) layout.

## 🌟 Key Features
- **Light / dark theme toggle** — persisted across visits via `localStorage`, defaults to the visitor's OS preference.
- **Smooth, professional animations** — staggered scroll reveals, hover micro-interactions, and a page-load hero sequence, all respecting `prefers-reduced-motion`.
- **Structured biography** — a visual timeline, crew card grid, powers/Gear evolution track, and an achievements log.
- **Multimedia** — embedded audio and video with styled players.
- **Accessible contact form** — labeled fields, focus states, and inline submit feedback.
- **Sticky section nav** with scroll-based active-link highlighting.

## 🛠 Tech Stack
- **Languages:** HTML5, CSS3 (custom properties for theming), vanilla JavaScript (no build step)
- **Fonts:** [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) (Persian-optimized) + JetBrains Mono for accents
- **Multimedia:** native `<audio>` and `<video>` elements

## 📁 Structure
```
index.html      → main page
reset.css       → CSS reset (unchanged, Eric Meyer v2.0)
luffy.css       → theme tokens, layout, components, animations
script.js       → theme toggle, scroll reveal, active-nav, form feedback
image/          → place your images here (see paths referenced in index.html)
music/          → place your audio track(s) here
video/          → place your video file(s) here
```

> The `image/`, `music/`, and `video/` folders are placeholders. Add your own
> files with the exact names referenced in `index.html` (or update the
> `src`/`href` paths to match your filenames).

## 🚀 How to Run
1. Clone or download this repository.
2. Drop your media files into `image/`, `music/`, and `video/`.
3. Open `index.html` directly in any modern browser — no build step required.

## 🎨 Customizing the theme
All colors, fonts, and spacing live as CSS custom properties at the top of
`luffy.css` (`:root` for light mode, `html[data-theme="dark"]` for dark
mode). Change a value there and it cascades through the whole site.

## 🤝 Contribution
This is a passion project for *One Piece* fans. Feedback on design or
structural suggestions is always welcome!

---
*Built with love by Golden Titab/Aurora Studio*

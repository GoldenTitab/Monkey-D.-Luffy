# Monkey D. Luffy Fan Site

> A fan-made biography website for Monkey D. Luffy, captain of the Straw Hat Pirates from One Piece, with a light and dark theme, smooth animations, and a responsive Persian (RTL) layout.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Fan-made project: this site is made by a fan, for fans. It is not an official One Piece site and is not affiliated with its creators or publishers.

## Overview

This site presents Monkey D. Luffy's story as a structured biography, not as a single long page of text. A visual timeline, a crew card grid, a powers and Gear evolution track, and an achievements log organize the character's journey, with embedded audio and video, a contact form, and a sticky section navigation that highlights the section you are reading.

The design is theme-first: light and dark modes are built into the CSS, the visitor's choice is remembered across visits, and animations respect the visitor's reduced-motion preference.

## Features

- **Light and dark theme toggle** — persisted across visits via `localStorage`, defaulting to the visitor's OS preference.
- **Smooth, professional animations** — staggered scroll reveals, hover micro-interactions, and a page-load hero sequence, all respecting `prefers-reduced-motion`.
- **Structured biography** — a visual timeline, crew card grid, powers and Gear evolution track, and an achievements log.
- **Multimedia** — embedded audio and video with styled players.
- **Accessible contact form** — labeled fields, focus states, and inline submit feedback.
- **Sticky section navigation** — with scroll-based active-link highlighting.
- **Responsive RTL layout** — a Persian (RTL) layout that adapts to mobile and desktop.

## Tech Stack

| Area | Technology |
| --- | --- |
| Languages | HTML5, CSS3 (custom properties for theming), vanilla JavaScript (no build step) |
| Fonts | Vazirmatn (Persian-optimized) and JetBrains Mono for accents |
| Multimedia | Native `<audio>` and `<video>` elements |
| Theme storage | `localStorage` |

## Getting Started

### Prerequisites

No build step, package installation or server is required. Any modern browser is enough.

### Installation

```bash
git clone https://github.com/GoldenTitab/Monkey-D.-Luffy.git
cd Monkey-D.-Luffy
```

### Run

1. Drop your media files into `image/`, `music/` and `video/` (see Project Structure below).
2. Open `index.html` directly in any modern browser.

## Project Structure

```
index.html      # Main page
reset.css       # CSS reset (unchanged, Eric Meyer v2.0)
luffy.css       # Theme tokens, layout, components and animations
script.js       # Theme toggle, scroll reveal, active navigation and form feedback
image/          # Place your images here (see paths referenced in index.html)
music/          # Place your audio track(s) here
video/          # Place your video file(s) here
```

> The `image/`, `music/` and `video/` folders are placeholders. Add your own files with the exact names referenced in `index.html`, or update the `src` and `href` paths to match your filenames.

## Usage

Browse the biography sections from the sticky navigation, switch between light and dark themes with the theme toggle, and use the contact form at the end of the page to send feedback.

## Customizing the Theme

All colors, fonts and spacing live as CSS custom properties at the top of `luffy.css` (`:root` for light mode, `html[data-theme="dark"]` for dark mode). Change a value there and it cascades through the whole site.

## Contributing

This is a passion project for One Piece fans. Feedback on design or structural suggestions is always welcome.

## License

No license file is present in this repository.

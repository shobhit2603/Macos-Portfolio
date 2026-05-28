<div align="center">

# 🍏 macOS Portfolio

### _An Interactive, Sleek, and Production-Ready macOS Desktop Environment on the Web_

**Modern Desktop UI · Draggable & Focus-Managed Windows · GSAP Animations · Tailwind CSS v4 · Zustand State Store**

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5-353535?style=for-the-badge&logo=react&logoColor=white)](https://github.com/pmndrs/zustand)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 What is macOS Portfolio?

**macOS Portfolio** is a fully interactive, production-ready portfolio website designed to look and feel like a modern macOS desktop environment. It delivers a fluid, premium desktop experience inside a browser:
- **Fully Draggable & Interactive Windows** with GSAP integration, allowing users to move, minimize, maximize, focus, and close windows dynamically.
- **Hierarchical File Browsing** inside an interactive Finder application, showing structured information like past projects, contact details, personal images, and resume files.
- **Multi-app OS Environment simulation** featuring functional apps like Safari (article/blog reader), Terminal (skills analyzer), Photos (gallery), Text Edit (file details reader), and Resume (pdf renderer).

The application leverages a modular, **component-based React architecture** combined with **Zustand** for lightweight, high-performance state management of active windows and file systems.

---

## ✨ Features

- 🖥️ **Sleek macOS Desktop UI** — A pixel-perfect reproduction of the macOS desktop interface, complete with a top navigation bar (live system clock, wifi status, and indicators) and a dynamic bottom dock.
- ⚓ **Dynamic Zooming Dock** — Interactive dock with hover-based scale magnification transitions that provides quick launch triggers for desktop applications.
- 📂 **Functional Finder Application** — A robust file explorer enabling navigation through directories (Work, About Me, Resume, Trash) and launching file attachments (images, PDFs, text descriptions, external links).
- 🧭 **Simulated Safari Browser** — Read articles and navigate curated technical blog posts, complete with direct external link integrations.
- 💻 **Interactive Skills Terminal** — A custom command terminal styled simulation showcasing technical proficiencies across languages, frontend, backend, databases, styling, and development tools.
- 📑 **In-App PDF Resume Viewer** — Embedded rendering of a professional CV directly within the macOS interface utilizing `react-pdf`.
- 🖼️ **Photos App Gallery** — A native image grid viewer supporting memory browsing and high-definition photo viewing.
- 🎨 **Window Focus & Z-Index Management** — Intelligent state management via Zustand that automatically tracks the active window and moves it to the top layer (`z-index`) upon interaction.
- 🛠️ **Smooth Physics & Dragging** — Integrated with GreenSock's (GSAP) Draggable plugin for buttery-smooth window movements.

---

## 🏗️ Tech Stack

### Frontend & Utilities
| Technology | Purpose |
|---|---|
| React 19 | Modern UI rendering engine with component-based lifecycle |
| Vite 7 | Next-generation frontend tooling for ultra-fast HMR and building |
| Zustand 5 | Lightweight, fast, and scalable state management for active windows and file systems |
| Immer | Immutable state management helper for nested Zustand updates |
| GSAP (GreenSock) | Professional-grade window dragging and animations |
| Tailwind CSS v4 | Modern utility-first CSS framework with native CSS variables support |
| React PDF | High-fidelity rendering of PDF documents inside browser windows |
| Lucide React | Clean, modern vector icons for UI elements |
| Day.js | Lightweight date and time utility for the top navigation bar clock |
| React Tooltip | Interactive, customized hover tooltips for the dock icons |

---

## 📂 Project Structure

```
macos-portfolio/
├── public/                  # Static assets
│   ├── files/               # PDF CV or static document files
│   ├── icons/               # System and application icons (wifi, search, etc.)
│   └── images/              # Project screenshots and gallery images
│
├── src/                     # React Application Source
│   ├── components/          # Desktop Shell Components
│   │   ├── Dock.jsx         # Magnified launcher application bar
│   │   ├── Home.jsx         # Main desktop surface area hosting app icons
│   │   ├── Navbar.jsx       # Top system status bar with menu links and time
│   │   ├── Welcome.jsx      # Initial boot screen or splash loader
│   │   └── WindowControls.jsx # Red, yellow, green title bar action circles
│   │
│   ├── constants/
│   │   └── index.js         # Navigation links, tech stack details, filesystem hierarchy
│   │
│   ├── hoc/
│   │   └── WindowWrapper.jsx # Higher-Order Component for GSAP drag, zoom and layering
│   │
│   ├── store/
│   │   ├── location.js      # Filesystem directory path and navigation state
│   │   └── window.js        # Window instances, focus stack and open/close states
│   │
│   ├── windows/             # Individual Window components
│   │   ├── Contact.jsx      # Contact form and social link directory
│   │   ├── Finder.jsx       # Custom file and folder navigator
│   │   ├── Image.jsx        # Image asset viewing window
│   │   ├── Photos.jsx       # Grid picture album application
│   │   ├── Resume.jsx       # Integrated PDF resume renderer
│   │   ├── Safari.jsx       # Simulated article/blog browser
│   │   ├── Terminal.jsx     # Tech skill level visualizer command terminal
│   │   └── Text.jsx         # Txt document content viewer
│   │
│   ├── App.jsx              # Main App layout bootstrapping windows
│   ├── index.css            # Stylesheets with custom design variables
│   └── main.jsx             # React application DOM mount point
│
├── eslint.config.js         # ESLint system setup
├── index.html               # Main entry HTML template
├── jsconfig.json            # Path alias configurations (@components, etc.)
├── package.json             # Scripts, dependencies, and devDependencies
└── vite.config.js           # Vite development and bundle setups
```

---

## 🔌 State Management (Zustand Stores)

### 🪟 Window Control — `useWindowStore`

| Method / State | Parameter | Description |
|---|---|---|
| `windows` | State | Object tracking configurations (`isOpen`, `zIndex`, `data`) for all window instances |
| `nextZIndex` | State | Numeric tracker for the next incremental overlay layer |
| `openWindow` | `(windowKey, data = null)` | Sets window visibility `isOpen` to true and overlays it on top |
| `closeWindow` | `(windowKey)` | Closes the specified window and resets its focus variables |
| `focusWindow` | `(windowKey)` | Moves the selected window to the top layout layer |

### 📂 Filesystem Navigation — `useLocationStore`

| Method / State | Parameter | Description |
|---|---|---|
| `activeLocation` | State | Currently active Finder directory object (defaults to `locations.work`) |
| `setActiveLocation`| `(location)` | Updates the active Finder folder to the selected location directory |
| `resetActiveLocation`| None | Resets Finder navigation back to the default `work` directory |

---

## ⚙️ Local Setup

### Prerequisites
- Node.js (version 20+)

---

### Method 1: Running Manually (Locally)

#### 1. Clone the repository
```bash
git clone https://github.com/shobhit2603/macos-portfolio.git
cd macos-portfolio
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` (or the port specified by Vite) in your browser.

#### 4. Build for Production
```bash
npm run build
```
This compiles the application assets into a highly optimized static bundle inside the `/dist` directory.

---

## 🌐 Deployment

| Service | Host Provider | Configuration |
|---|---|---|
| **Frontend Client** | **Vercel / Netlify** | Connect your Git repository, select **Vite** preset, and deploy. No environment variables required. |
| **Static Hosting** | **GitHub Pages** | Configure build output to deploy the build folder (`/dist`). |

---

## 📄 License

Distributed under the MIT License.

---

<div align="center">

Built with ❤️ by [Shobhit](https://github.com/shobhit2603)

</div>

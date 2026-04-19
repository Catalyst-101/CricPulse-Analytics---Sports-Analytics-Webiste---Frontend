# CricPulse Analytics - Sports Analytics Website - Frontend

CricPulse Analytics is a modern, real-time cricket analytics dashboard designed to visualize live telemetry, track player performance, and provide comprehensive match analysis across multiple formats (T20, ODI, Test, Men's, and Women's). Built with React and Tailwind CSS, the platform delivers an immersive, responsive interface featuring interactive light and dark modes, dynamic routing, and in-depth match pulse visualizations.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Version 18.0.0 or higher recommended)
- [npm](https://npmjs.com/) (usually bundled with Node.js)

## Core Technologies & Packages

Running the installation command will automatically pull in the following key packages that power this application:
- **React & ReactDOM (^19.x)**: Core UI framework.
- **Vite (^8.x)**: Next-generation frontend tooling and bundler.
- **Tailwind CSS (^4.x)**: Utility-first CSS framework for rapid styling.
- **React Router DOM (^7.x)**: Declarative routing for navigating between dashboard sections.
- **Recharts (^3.x)**: Composable charting library used for telemetry data visualizations.
- **Framer Motion (^12.x)**: Powerful animation library for seamless UI transitions.
- **Lucide React (^1.x)**: Clean, consistent iconography used throughout the interface.
- **clsx & tailwind-merge**: Utilities for constructing dynamic CSS class names.

*(If you are setting up this stack from scratch on a new project, you can install the core dependencies via:)*
```bash
npm install react-router-dom recharts framer-motion lucide-react clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/vite
```

## Getting Started

Follow these steps to initialize and run the project locally.

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Catalyst-101/CricPulse-Analytics---Sports-Analytics-Webiste---Frontend.git
   cd CricPulse-Analytics---Sports-Analytics-Webiste---Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will become accessible at `http://localhost:5173`.

## Building for Production

To create an optimized production build, run:
```bash
npm run build
```

This will generate a `dist` folder containing the minified files ready for deployment. To test the production build locally, you can use:
```bash
npm run preview
```
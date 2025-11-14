# FOSSIT Website

A modern website for FOSSIT (Free and Open Source Software IT) built with React, TypeScript, Vite, and Tailwind CSS.

## Project Structure

```
fossit_website_dev/
├── components/          # Reusable UI components (shadcn/ui)
│   ├── figma/          # Figma-exported components
│   └── ui/             # UI component library
├── imports/            # SVG paths and other imports
├── src/                # Source files
│   └── main.tsx        # Application entry point
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind directives
├── App.tsx             # Main application component
└── index.html          # HTML template
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built with Radix UI
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Changes Made

This project was generated from a site generator and required the following fixes to work:

1. **Added missing import** - Added `svgPaths` import to `App.tsx`
2. **Created configuration files**:
   - `package.json` - Project dependencies and scripts
   - `tsconfig.json` - TypeScript configuration
   - `tsconfig.node.json` - TypeScript configuration for Node
   - `vite.config.ts` - Vite bundler configuration
   - `tailwind.config.js` - Tailwind CSS configuration
   - `postcss.config.js` - PostCSS configuration
   - `.eslintrc.cjs` - ESLint configuration
3. **Created project structure**:
   - `index.html` - HTML template
   - `src/main.tsx` - Application entry point
4. **Fixed invalid imports** - Removed version numbers from package imports (e.g., `@radix-ui/react-slot@1.1.2` → `@radix-ui/react-slot`)
5. **Updated `globals.css`** - Added Tailwind directives
6. **Installed dependencies** - All required packages for React, Tailwind, shadcn/ui components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

See the project license file for details.

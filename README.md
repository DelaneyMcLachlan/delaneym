# Portfolio Website

A modern Next.js portfolio website for showcasing projects and experience.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages via GitHub Actions.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://delaneymclachlan.github.io/delaneym/`

### Manual Deployment

If you need to deploy manually:

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out/` directory

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to `main`

## Features

- Responsive header with social links
- Project showcase with cards
- Work experience footer
- Modern, clean design
- Automatic GitHub Pages deployment


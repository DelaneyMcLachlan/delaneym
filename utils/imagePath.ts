// Utility to handle image paths with basePath for GitHub Pages
// This should match the basePath in next.config.js
const BASE_PATH = '/delaneym'

export function getImagePath(path: string): string {
  // For static export to GitHub Pages, always prepend basePath
  // This ensures images work correctly on GitHub Pages
  // In local development, Next.js dev server handles this automatically
  if (path.startsWith('text:')) {
    return path // Don't modify text-based images
  }
  return `${BASE_PATH}${path}`
}


// Utility to handle image paths with basePath for GitHub Pages
// This should match the basePath in next.config.js
const BASE_PATH = '/delaneym'

export function getImagePath(path: string): string {
  // Don't modify text-based images
  if (path.startsWith('text:')) {
    return path
  }
  
  // For static export, we always need to prepend basePath
  // because the HTML is generated at build time
  // Next.js config handles basePath for routing, but not for Image src in static export
  return `${BASE_PATH}${path}`
}


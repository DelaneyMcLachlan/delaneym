// Simple encoding/decoding utility for obfuscating links
// This makes links harder to parse from static HTML

// Browser-compatible encoding (for use in Node.js to generate encoded strings)
export function encodeLink(url: string): string {
  if (typeof window === 'undefined') {
    // Node.js environment
    const encoded = Buffer.from(url).toString('base64');
    return encoded.split('').reverse().join('');
  } else {
    // Browser environment
    const encoded = btoa(unescape(encodeURIComponent(url)));
    return encoded.split('').reverse().join('');
  }
}

// Browser-compatible decoding
export function decodeLink(encoded: string): string {
  // Reverse the reversal, then decode
  const reversed = encoded.split('').reverse().join('');
  
  if (typeof window === 'undefined') {
    // Node.js environment
    return Buffer.from(reversed, 'base64').toString('utf-8');
  } else {
    // Browser environment
    try {
      return decodeURIComponent(escape(atob(reversed)));
    } catch (e) {
      // Fallback for edge cases
      return atob(reversed);
    }
  }
}

// Encoded links - these are the obfuscated versions
// To encode a new link, use: encodeLink('https://your-link.com')
export const encodedLinks = {
  github: '=4WYsh2Yhx0YNlXZuFGblR0Lt92YuIWdoRXan9yL6MHc0RHa',
  linkedin: 'v4WYsh2Yhx2YtlXZuFGblR2Lul2Lt92Yu4WakV2aulGbuc3d39yL6MHc0RHa',
  resume: '/resume.pdf', // This one can stay as-is since it's a local file
};


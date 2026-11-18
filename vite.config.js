import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Use subpath '/my-portfolio/' for GitHub Pages in CI, and '/' for Vercel, Netlify & local dev
  base: process.env.GITHUB_ACTIONS ? '/my-portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
});

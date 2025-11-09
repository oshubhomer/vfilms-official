import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Works perfectly for Vercel, Netlify, or localhost
export default defineConfig({
  plugins: [react()],
  base: '/', // app is served from the root
});

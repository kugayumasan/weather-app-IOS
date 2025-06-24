import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tanstack from '@tanstack/router-vite-plugin';

export default defineConfig({
  plugins: [react(), tanstack()],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
  main: 'src/main.jsx', 
});

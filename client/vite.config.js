import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      main: './src/main.jsx',
      external: ['react-loader-spinner']
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

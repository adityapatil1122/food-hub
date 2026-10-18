import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(currentDir, 'src'),
      '@assets': path.resolve(
        currentDir,
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: currentDir,
  build: {
    outDir: path.resolve(currentDir, 'dist'),
    emptyOutDir: true,
  },
});

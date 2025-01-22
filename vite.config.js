import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/financeiro-virtual/', // Nome do repositório
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './js') // Alias para a pasta js
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/financeiro-virtual/', // Nome do repositório no GitHub Pages
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
    outDir: 'dist', // Pasta de saída para os arquivos compilados
    emptyOutDir: true, // Limpa a pasta de saída antes de cada build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Ponto de entrada principal
        cadastro: path.resolve(__dirname, 'cadastro.html'), // Ponto de entrada para cadastro.html
        login: path.resolve(__dirname, 'login.html'), // Ponto de entrada para login.html
        // Adicione outros arquivos HTML aqui, se necessário
      }
    }
  }
});
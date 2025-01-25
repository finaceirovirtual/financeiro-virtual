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
        dashboard: path.resolve(__dirname, 'dashboard.html'), // Ponto de entrada para dashboard.html
        formularioGanhos: path.resolve(__dirname, 'formulario-ganhos.html'), // Ponto de entrada para formulario-ganhos.html
        formularioDespesas: path.resolve(__dirname, 'formulario-despesas.html'), // Ponto de entrada para formulario-despesas.html
        formularioInvestimentos: path.resolve(__dirname, 'formulario-investimentos.html') // Ponto de entrada para formulario-investimentos.html
      }
    }
  }
});
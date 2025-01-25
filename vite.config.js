import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/financeiro-virtual/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './js')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        cadastro: path.resolve(__dirname, 'cadastro.html'),
        login: path.resolve(__dirname, 'login.html'),
        dashboard: path.resolve(__dirname, 'dashboard.html'),
        formularioGanhos: path.resolve(__dirname, 'formulario-ganhos.html'),
        formularioDespesas: path.resolve(__dirname, 'formulario-despesas.html'),
        formularioInvestimentos: path.resolve(__dirname, 'formulario-investimentos.html')
      }
    }
  }
});
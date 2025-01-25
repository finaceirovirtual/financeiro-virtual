import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, './'),
    publicDir: 'assets', // Pasta de arquivos estáticos
    build: {
        outDir: 'dist', // Pasta de saída
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
                formularioDespesas: resolve(__dirname, 'formulario-despesas.html'),
                formularioGanhos: resolve(__dirname, 'formulario-ganhos.html'),
                formularioInvestimentos: resolve(__dirname, 'formulario-investimentos.html')
            }
        }
    },
    server: {
        port: 3000, // Porta do servidor
        open: true // Abre o navegador automaticamente
    }
});
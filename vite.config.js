import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') // Alias para facilitar imports
        }
    },
    server: {
        port: 3000, // Porta do servidor de desenvolvimento
        open: true // Abre o navegador automaticamente
    },
    build: {
        outDir: 'dist', // Pasta de saída para os arquivos compilados
        emptyOutDir: true // Limpa a pasta de saída antes de cada build
    }
});
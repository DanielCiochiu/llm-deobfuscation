import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'vanilla.js',
                chunkFileNames: 'vanilla-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    }
});

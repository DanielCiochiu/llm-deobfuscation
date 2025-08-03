import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess()
        })
    ],
    optimizeDeps: {
        exclude: ['svelte', 'svelte/internal']
    },
    build: {
        rollupOptions: {
            external: ['svelte', 'svelte/internal'],
            output: {
                entryFileNames: 'svelte.js',
                chunkFileNames: 'svelte-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
                globals: {
                    svelte: 'Svelte',
                    'svelte/internal': 'SvelteInternal'
                }
            }
        }
    }
});

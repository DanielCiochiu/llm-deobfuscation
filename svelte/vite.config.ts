// @ts-ignore
import { viteObfuscateFile } from 'vite-plugin-obfuscator';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess()
        }),
        viteObfuscateFile({
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 1000,
            mangle: true
        })
    ],
    optimizeDeps: {
        exclude: ['@vanilla']
    },
    build: {
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    }
});

import { defineConfig } from 'vite';
import { viteObfuscateFile } from 'vite-plugin-obfuscator';

export default defineConfig({
    plugins: [
        viteObfuscateFile({
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 1000,
            mangle: true
        })
    ]
});

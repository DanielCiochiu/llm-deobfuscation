import { defineConfig } from 'vite';
import { viteObfuscateFile } from 'vite-plugin-obfuscator';

export default defineConfig({
    plugins: [
        viteObfuscateFile({
            // options here
        })
    ]
});

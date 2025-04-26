// @ts-ignore
import { viteObfuscateFile } from 'vite-plugin-obfuscator';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        viteObfuscateFile({
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 1000,
            mangle: true
        })
    ],
    build: {
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});

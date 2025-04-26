// @ts-ignore
import { viteObfuscateFile } from 'vite-plugin-obfuscator';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
    resolve: {
        alias: {
            // react: 'https://unpkg.com/react@18/umd/react.production.min.js',
            // 'react-dom': 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'
        }
    },
    plugins: [
        viteExternalsPlugin({
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-dom/client': 'ReactDOM'
        }),
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
            external: ['react', 'react-dom', 'react-dom/client'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-dom/client': 'ReactDOM'
                }
            }
        }
    },
    optimizeDeps: {
        exclude: ['react', 'react-dom', 'react-dom/client']
    }
});

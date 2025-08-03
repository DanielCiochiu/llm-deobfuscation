import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
    plugins: [
        viteExternalsPlugin({
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-dom/client': 'ReactDOM'
        })
    ],
    build: {
        rollupOptions: {
            external: ['react', 'react-dom', 'react-dom/client', 'solid-js/jsx-runtime'],
            output: {
                entryFileNames: 'react.js',
                chunkFileNames: 'react-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
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

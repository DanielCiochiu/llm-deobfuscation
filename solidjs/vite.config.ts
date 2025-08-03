import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    plugins: [
        solidPlugin({
            solid: {
                generate: 'dom',
                hydratable: true
            }
        })
    ],
    resolve: {
        conditions: ['development', 'browser']
    },
    build: {
        target: 'esnext',
        rollupOptions: {
            external: ['solid-js', 'solid-js/web'],
            output: {
                entryFileNames: 'solid.js',
                chunkFileNames: 'solid-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
                globals: {
                    'solid-js': 'Solid',
                    'solid-js/web': 'SolidWeb'
                }
            }
        }
    }
});

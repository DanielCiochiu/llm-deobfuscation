// @ts-ignore
import { viteObfuscateFile } from 'vite-plugin-obfuscator';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
    plugins: [
        // viteExternalsPlugin({
        //     'solid-js': 'Solid',
        //     'solid-js/web': 'SolidWeb'
        // }),
        solidPlugin({
            solid: {
                generate: 'dom',
                hydratable: true
            }
        }),
        viteObfuscateFile({
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 1000,
            mangle: true
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
                globals: {
                    'solid-js': 'Solid',
                    'solid-js/web': 'SolidWeb'
                }
            }
        }
    }
});

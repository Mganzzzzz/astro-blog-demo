import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    integrations: [vue({
        jsx: true,
        devtools: {launchEditor: "webstorm"},
    }),
        tailwind()],
});

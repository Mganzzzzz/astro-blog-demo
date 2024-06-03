import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  adapter: netlify(),
  integrations: [
    vue({
      jsx: true,
      devtools: { launchEditor: "webstorm" },
    }),
    tailwind(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].js",
          chunkFileNames: "chunks/chunk.[hash].js",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
  },
});

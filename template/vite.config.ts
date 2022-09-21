import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"]
    }),
    Components({
      dirs: ["src/components"]
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3000
  }
});

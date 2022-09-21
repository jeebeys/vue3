# Vue 3 + TypeScript + Vite + Class

## 自动导入图标
### npm i -D unplugin-icons @iconify/json

```bash
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
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
      imports: ["vue", "vue-router"],
      resolvers: [IconsResolver({ prefix: "Icon" })]
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [IconsResolver({ prefix: "icon" })]
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3000
  }
});
```

## VUEX装饰器
```
报错: npm i -S vuex-class 
兼容: npm i -S @jeebey/vuex-class --registry=https://registry.npmjs.org/
用法: https://www.npmjs.com/package/vuex-class

```

## 样式解析器
```
npm install less less-loader --save-dev
```

## 问题

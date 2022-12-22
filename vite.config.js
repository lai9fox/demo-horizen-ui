import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import svgBuilder from './src/plugins/svgBuilder';

const varPath = fileURLToPath(new URL('./src/assets/style/var.less', import.meta.url));
console.log(import.meta.url);
console.log(varPath);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), svgBuilder('./src/assets/svg/')],
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${ varPath }";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});

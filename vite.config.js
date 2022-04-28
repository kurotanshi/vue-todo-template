import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 開發環境的 proxy
  // api 參考文件： https://todoo.5xcamp.us/api-docs/index.html
  server: {
    proxy: {
      '/users': {
        target: 'https://todoo.5xcamp.us/users',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/users/, ''),
      },
      '/check': {
        target: 'https://todoo.5xcamp.us/check',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/check/, ''),
      },
      '/todos': {
        target: 'https://todoo.5xcamp.us/todos',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/todos/, ''),
      },
    }
  }
})

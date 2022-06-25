import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const resolvePath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: {
      '@components': resolvePath('./src/components'),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})

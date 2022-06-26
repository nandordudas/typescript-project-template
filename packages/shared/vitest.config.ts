import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

const resolvePath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  resolve: {
    alias: {
      '@core': resolvePath('./src'),
    },
  },
  test: {
    globals: true,
  },
})

import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

const resolvePath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  resolve: {
    alias: {
      '@app': resolvePath('./src/app'),
      '@middlewares': resolvePath('./src/middlewares'),
      '@routes/config': resolvePath('./src/routes/config'),
      '@routes': resolvePath('./src/routes'),
      '@types': resolvePath('./src/types.ts'),
    },
  },
  test: {
    globals: true,
  },
})

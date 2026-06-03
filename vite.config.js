import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        leadership: './leadership.html',
        tsc: './tsc.html',
        events: './events.html',
        usecases: './usecases.html'
      }
    }
  }
})
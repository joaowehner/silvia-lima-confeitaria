import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/silvia-lima-confeitaria/',
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/chrome/**', '**/screenshots/**', '**/qa/**'],
    },
  },
  build: {
    target: 'es2020',
  },
})

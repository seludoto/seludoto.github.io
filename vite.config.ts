import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // use relative base so site works on GitHub Pages regardless of repo name
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

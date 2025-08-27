import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  // si vas a publicar en GitHub Pages como "project site", ajusta esto:
  // base: '/landing-servicios/',
})

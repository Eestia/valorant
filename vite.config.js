import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/valorant/', // <- ici tu mets le nom du dépôt GitHub
  plugins: [react()],
})
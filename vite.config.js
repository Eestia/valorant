import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/valorant/', // ← Ajoute cette ligne
  plugins: [react()],
})
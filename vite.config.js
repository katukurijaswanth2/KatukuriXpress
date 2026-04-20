import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    open: false,      // Keeps it from opening new tabs
    port: 8042,       // Forces Vite to use this specific port (you can change this to 3000 if you prefer)
    strictPort: true  // Tells Vite: "If 8042 is busy, fail! Do NOT change the port."
  }
})
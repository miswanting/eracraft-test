// https://v2.tauri.app/start/frontend/nuxt/
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['sanitize.css'],
  modules: ['@nuxt/fonts'],
  ssr: false,
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
  },
})

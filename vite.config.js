// vite.config.js (in client folder)
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5173', // Adjust as per your server's URL
    },
  },
});

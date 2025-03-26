import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://18.205.24.243', // Your IP address
        changeOrigin: true,
        secure: false, // Set to false if you're using a self-signed SSL certificate
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

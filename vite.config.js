import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server : {proxy: {
    '/api': {
         target: 'https://backend-production-2fa9.up.railway.app/',
         changeOrigin: true,
         secure: false,      
         ws: false,
         rewrite: (path) => path.replace(/^\/api/, ''),
      }
  }}
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  define: {
    'process.env': {
      API_URL: process.env.VITE_API_URL || 'https://njjbwcjd-3000.euw.devtunnels.ms', // Fallback to your port-forwarding link
    },
  },
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, 'dist'),
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // Ensure index.html is included in the build
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
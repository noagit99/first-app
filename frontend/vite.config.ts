import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';


export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  define: {
    root: __dirname,
    'process.env': {
      API_URL: process.env.VITE_API_URL || 'https://njjbwcjd-3000.euw.devtunnels.ms', // Fallback to your port-forwarding link
    }
  },
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, 'dist'),
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        client: resolve(__dirname, 'index.html'),
      },
    },
  },
});

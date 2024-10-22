import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  define: {
    'process.env': {
      API_URL: process.env.VITE_API_URL || 'https://njjbwcjd-3000.euw.devtunnels.ms', // Fallback to your port-forwarding link
    },
  },
});

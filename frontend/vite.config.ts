import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  define: {
    'process.env': {
      VITE_API_URL: 'https://njjbwcjd-3000.euw.devtunnels.ms/:3000', // Replace with your actual link
  },
  },
});

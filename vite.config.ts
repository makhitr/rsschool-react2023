/// <reference types="vitest" />
import { defineConfig } from 'vite';
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules'],
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupVitest.js', './src/setupTests.ts'],
    coverage: {
      provider: 'istanbul',
    },
  },
});

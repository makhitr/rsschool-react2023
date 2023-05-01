import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      codeCoverage(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});

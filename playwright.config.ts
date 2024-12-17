import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 80 * 1000, // Timeout for each test
  retries: 0, // Retries on failure
  reporter: [['html', { open: 'never' }]], // HTML Test Report
  use: {
    headless: false, // Run tests in headless mode
    //viewport: { width: 1280, height: 720 },
    viewport: null,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry', // Capture trace for debugging
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});

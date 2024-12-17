"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    timeout: 30 * 1000, // Timeout for each test
    retries: 0, // Retries on failure
    reporter: [['html', { open: 'never' }]], // HTML Test Report
    use: {
        headless: false, // Run tests in headless mode
        //viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry', // Capture trace for debugging
    },
    projects: [
        {
            name: 'chromium',
            use: Object.assign({}, test_1.devices['Desktop Chrome']),
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

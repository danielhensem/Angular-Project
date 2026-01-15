import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration for Angular E2E
 */
export default defineConfig({
  testDir: './e2e',               // folder with your E2E tests
  fullyParallel: true,            // run tests in parallel
  forbidOnly: !!process.env['CI'], // prevent commit with test.only
  retries: process.env['CI'] ? 2 : 0, // retry failed tests on CI
  workers: process.env['CI'] ? 1 : undefined, // single worker on CI
  reporter: [['html', { open: 'never' }]], // generate HTML report (won't auto-open)
  use: {
    baseURL: process.env['PLAYWRIGHT_TEST_BASE_URL'] ?? 'http://localhost:4200',
    trace: 'on-first-retry',      // collect trace for failed tests
    screenshot: 'only-on-failure', // capture screenshots on failure
    video: 'retain-on-failure',    // record video on failure
    headless: true,                // run tests in headless mode
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Optional mobile tests
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});

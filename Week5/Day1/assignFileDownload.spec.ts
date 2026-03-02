import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Download file.json into Data folder', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download');

  await page.click('text=file.json');

  const download = await downloadPromise;

  // Save inside Data folder
  const downloadPath = path.join(__dirname, '../../../../Data/file.json');

  await download.saveAs(downloadPath);

  // Verify file exists
  expect(fs.existsSync(downloadPath)).toBeTruthy();
});
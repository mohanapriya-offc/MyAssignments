import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload file from Data folder', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  // Build correct path to Data folder
  const filePath = path.join(__dirname, '../../../../Data/sample.pdf');

  await page.setInputFiles('#file-upload', filePath);

  await page.click('#file-submit');

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('sample.pdf');

});

test('Upload image from Data folder', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  const imagePath = path.join(__dirname, '../../../../Data/sample-image.png');

  await page.setInputFiles('#file-upload', imagePath);

  await page.click('#file-submit');

  await expect(page.locator('#uploaded-files'))
    .toHaveText('sample-image.png');
});
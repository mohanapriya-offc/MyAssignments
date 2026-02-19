import { test, expect } from "@playwright/test";
test('LeafGround Radio Button Test', async ({ page }) => {

  // 1️⃣ Navigate to LeafGround Radio page
  await page.goto('https://leafground.com/radio.xhtml');

  // 2️⃣ Assert default selected browser (Chrome)
  const safariRadio = page.locator("//label[text()='Safari']/preceding-sibling::div//input").nth(1);
  await expect(safariRadio).toBeChecked();

  // 3️⃣ Click your favorite browser (Firefox)
  const firefoxRadio = page.locator("//label[text()='Firefox']").first();
  await firefoxRadio.click();
  await expect(firefoxRadio).toBeChecked();

  // 4️⃣ Click one city (Chennai)
  const chennaiRadio = page.locator("//label[text()='Chennai']");
  await chennaiRadio.click();
  await expect(chennaiRadio).toBeChecked();

  // 5️⃣ Assert default selected age group (21-40 Years)
  const ageGroup = page.locator("//label[text()='21-40 Years']/preceding-sibling::div//input");
  await expect(ageGroup).toBeChecked();

});

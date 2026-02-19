import { test, expect } from "@playwright/test";

test('LeafGround Auto Waiting Assignment', async ({ page }) => {

  // 1️⃣ Navigate to Waits page
  await page.goto('https://leafground.com/waits.xhtml');


  // =========================================================
  // 2️⃣ Wait for element to become visible
  // =========================================================
  const visibleButton = page.getByText('Click').first()
  await visibleButton.click()

  const visibleMessage = page.locator('span:has-text("I am here")').first()
  await expect(visibleMessage).toBeVisible({ timeout: 10000 })


  // =========================================================
  // 3️⃣ Wait for element to disappear
  // =========================================================
  const disappearBtn = page.getByText('Click').nth(1)
  await disappearBtn.click()

  const disappearingElement = page.locator('.ui-growl-title')
  await expect(disappearingElement).toBeHidden({ timeout: 10000 })


  // =========================================================
  // 4️⃣ Wait for element to become clickable (enabled)
  // =========================================================
  const enableBtn = page.getByText('Click First Button')
  await enableBtn.click()

  const disabledButton = page.locator('button:has-text("Click Second")')
  await expect(disabledButton).toBeEnabled({ timeout: 5000 })


  // =========================================================
  // 5️⃣ Wait for text change
  // =========================================================
  const textChangeBtn = page.locator("//span[text()='Click']").nth(2)
  await textChangeBtn.click()
  
  const textElement = page.locator('span:has-text("Did you notice?")').first()
  await expect(textElement).toHaveText('Did you notice?', { timeout: 15000 })


})

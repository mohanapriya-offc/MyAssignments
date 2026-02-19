import {test,expect} from '@playwright/test'
test("Edit Lead", async({page})=>{
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.fill('#username', 'Demosalesmanager');
  await page.fill('#password', 'crmsfa');
  await page.click('.decorativeSubmit');
  await page.click('a[href*="crmsfa"]');
  await page.click('a:has-text("Leads")');
  await page.click('a:has-text("Create Lead")');
  await page.fill('#createLeadForm_companyName', 'Test Company');
  await page.fill('#createLeadForm_firstName', 'John');
  await page.fill('#createLeadForm_lastName', 'Doe');
  await page.click('.smallSubmit');
  await page.click('a:has-text("Edit")');
  await page.fill('#updateLeadForm_companyName', 'Testleaf');
  await page.click('.smallSubmit');
  await page.locator("//span[contains(text(),'Testleaf')]").isVisible()
}
)
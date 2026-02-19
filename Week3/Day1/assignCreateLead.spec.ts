import { test } from '@playwright/test';

test('Create Lead using CSS locators', async ({ page }) => {

  // 1. Navigate to URL
  await page.goto('http://leaftaps.com/opentaps/control/main');

  // 2. Enter username (id - username)
  await page.fill('#username', 'Demosalesmanager');

  // 3. Enter password (id-password)
  await page.fill('#password', 'crmsfa');

  // 4. Click Login (class-decorativeSubmit)
  await page.click('.decorativeSubmit');

  // 5. Click CRM/SFA (a,href=/crmsfa/control/main?externalLoginKey=EL189973729655)
  await page.click('a[href*="crmsfa"]');

  // 6. Click Leads (a, text=Leads)
  await page.click('a:has-text("Leads")');

  // 7. Click Create Lead (a, text=Create Lead)
  await page.click('a:has-text("Create Lead")');

  // 8. Fill Company Name (id-createLeadForm_companyName)
  await page.fill('#createLeadForm_companyName', 'Test Company');

  // 9. Fill First Name (id)
  await page.fill('#createLeadForm_firstName', 'John');

  // 10. Fill Last Name (id)
  await page.fill('#createLeadForm_lastName', 'Doe');

  // 11. Fill Salutation (id)
  await page.fill('#createLeadForm_personalTitle', 'Mr');

  // 12. Fill Title (id)
  await page.fill('#createLeadForm_generalProfTitle', 'QA Engineer');

  // 13. Fill Annual Revenue (id)
  await page.fill('#createLeadForm_annualRevenue', '500000');

  // 14. Fill Department (id)
  await page.fill('#createLeadForm_departmentName', 'Testing');

  // 15. Fill Phone Number (id)
  await page.fill('#createLeadForm_primaryPhoneNumber', '9876543210');

  // 16. Click Create Lead button (class)
  await page.click('.smallSubmit');

});

import {test,expect} from '@playwright/test'
test("Edit Individuals", async({page})=>{
    const lastNameToSearch = 'Mohana';
    const newFirstName = 'Priya';
    await page.goto("https://login.salesforce.com/")
    await page.getByRole('textbox',{name:'username'}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole('textbox',{name:'password'}).fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(5000)
    await page.locator("//div[@class='slds-icon-waffle']").click()
    await page.locator("//button[text()='View All']").click()
    await page.locator("//p[text()='Individuals']").click()
    await page.getByPlaceholder('Search this list...').fill(lastNameToSearch);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  const row = page.locator('tr', { hasText: lastNameToSearch });
  await row.getByRole('button', { name: 'Show Actions' }).click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByLabel('Salutation').click();
  await page.getByText('Mr.').click();
  const firstNameInput = page.getByLabel('First Name');
  await firstNameInput.fill('');
  await firstNameInput.fill(newFirstName);
  await page.locator("//span[text()='Save']").click();
  await expect(page.locator('.toastMessage')).toContainText('Priya Mohana');
}
)


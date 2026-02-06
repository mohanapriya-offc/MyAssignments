import {test,expect} from '@playwright/test'
test("Create Opportunity", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole('textbox',{name:'username'}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole('textbox',{name:'password'}).fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.locator("//div[@class='slds-icon-waffle']").click()
    await page.waitForTimeout(5000)
    await page.locator("//button[text()='View All']").click()
    await page.locator("//p[text()='Sales']").click()
    await page.locator("//span[text()='Opportunities']").click()
    await page.locator("//div[@title='New']").click()
    await page.getByRole('textbox',{name:'Name'}).fill("Mohana")
    await page.locator("//input[@role='combobox']").first().click()
    await page.getByRole('listbox').getByRole('option').first().click()    
    await page.locator("//input[@name='CloseDate']").click()
    await page.locator("//td[@aria-current='date']").click()
    await page.locator("//button[@role='combobox']").nth(1).click()
    await page.locator("//lightning-base-combobox-item[@data-value='Needs Analysis']").click()
    await page.locator("//button[text()='Save']").nth(1).click()
    await expect(page.getByRole('heading',{name:'Mohana'})).toBeVisible()

}
)

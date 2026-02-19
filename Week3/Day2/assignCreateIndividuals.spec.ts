import {test,expect} from '@playwright/test'
test("Create Individuals", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole('textbox',{name:'username'}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole('textbox',{name:'password'}).fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(5000)
    await page.locator("//div[@class='slds-icon-waffle']").click()
    await page.locator("//button[text()='View All']").click()
    await page.locator("//p[text()='Individuals']").click()
    await page.locator("//div[@title='New']").click()
    await page.locator("//input[@placeholder='Last Name']").fill("Mohana")
    await page.locator("//span[text()='Save']").click()
    await expect(page.locator("//span[text()='Mohana']")).toBeVisible()
   
}
)
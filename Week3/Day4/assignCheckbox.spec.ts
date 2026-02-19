import { test, expect } from '@playwright/test';


test("checkbox", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml")
    await page.locator("//span[text()='Basic']").click()
    
    await page.locator("//span[text()='Ajax']").click()
    await expect(page.locator("//span[text()='Checked']")).toBeVisible()
    //await expect(toastMessage).toHaveText("Checked")
    await page.waitForTimeout(5000)

    await page.locator("//label[text()='Python']").click()
    await page.waitForTimeout(3000)
    
    const triStateBox= page.locator("//h5[text()='Tri State Checkbox']/following::div[contains(@class, 'ui-chkbox-box')]").first()
    await expect(triStateBox).toBeVisible()
    await triStateBox.click()
    const toastMessage = page.locator("//div[@class='ui-growl-message']")
    await toastMessage.waitFor({ state: 'visible' })
    const messageText = await toastMessage.textContent()
    console.log("Tri-State Option Chosen is: ", messageText)

    await triStateBox.click()
    const toastMessage1 = page.locator("//div[@class='ui-growl-message']")
    await toastMessage1.waitFor({ state: 'visible' })
    const messageText1 = await toastMessage1.textContent()
    console.log("Tri-State Option Chosen is: ", messageText1)

    await triStateBox.click()
    const toastMessage2 = page.locator("//div[@class='ui-growl-message']")
    await toastMessage2.waitFor({ state: 'visible' })
    const messageText2 = await toastMessage2.textContent()
    console.log("Tri-State Option Chosen is: ", messageText2)

    await page.locator("//div[@class='ui-toggleswitch-slider']").click()
    await expect(page.locator("//span[text()='Checked']")).toBeVisible()

    await expect(page.locator("//span[text()='Disabled']/preceding::input[1]")).toHaveAttribute("aria-disabled", "true")

    await page.locator("//div[@class='ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right']").click()
    await page.locator("//label[text()='London']").nth(1).click()
    await page.locator("//label[text()='Paris']").nth(1).click()
    await page.locator("//label[text()='Rome']").nth(1).click()
    await page.locator("//span[@class='ui-icon ui-icon-circle-close']").click()
    


}) 
import test from '@playwright/test'

test("Window Handleing",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

const parentWindow=context.waitForEvent('page')

await page.locator("//span[text()='Open']").click()

const childwindow=await parentWindow

await childwindow.locator("//textarea[@id='message']").fill("Playwright")

childwindow.close()

await page.waitForTimeout(2000)

await page.locator("//span[text()='Open Multiple']").click()


})
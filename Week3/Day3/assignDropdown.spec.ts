import test from "@playwright/test"
import { Page } from "@playwright/test"

test("Dropdown Assignment", async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml")
    
    const toolDropdown = page.locator("//select[@class='ui-selectonemenu']")
    await page.waitForTimeout(2000);
    await toolDropdown.selectOption({label:'Playwright'})

    
      const toolOptions = toolDropdown.locator('option')
      const toolCount = await toolOptions.count()
    
      console.log(`Total UI tools: ${toolCount}`)
    
      for (let i = 0; i < toolCount; i++) {
        console.log(await toolOptions.nth(i).textContent());
      }


      await page.locator("//label[text()='Select Country']").click()
      await page.waitForTimeout(2000);
      await page.locator("//li[@data-label='India']").click();


    await page.locator("//label[text()='Select City']").click()
    await page.locator("//li[text()='Chennai']").isVisible()

    await page.locator("//span[@class='ui-button-text']").click()
    await page.locator("//li[text()='Selenium WebDriver']").click()
    await page.locator("//span[@class='ui-button-text']").click()
    await page.locator("//li[text()='Playwright']").click()
    await page.locator("//span[@class='ui-button-text']").click()
    await page.locator("//li[text()='PostMan']").click()

    const languageDropdown = page.locator("//label[text()='Select Language']")
    await languageDropdown.click()
    await page.waitForTimeout(2000)
    

    const panel = page.locator(
  "//div[contains(@class,'ui-selectonemenu-panel') and contains(@style,'display: block')]"
    );
await panel.waitFor();

// Get all language options
const languageOptions = panel.locator("li[role='option']");
const languageCount = await languageOptions.count();

console.log(`Languages available: ${languageCount}`);

// Print all languages
for (let i = 0; i < languageCount; i++) {
  console.log(await languageOptions.nth(i).innerText());
}
  await page.locator("//li[text()='English']").click()

  await page.locator("//label[text()='Select Values']").click()
  await page.waitForTimeout(2000);
  
  
  await page.locator("//li[text()='Two']").click()
    

    })


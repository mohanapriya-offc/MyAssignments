import {test,expect} from "@playwright/test"
test("Alert handling",async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    
    page.on('dialog', alertType=>{
        const type = alertType.type()
        console.log(type)
        const message = alertType.message()
        console.log(message)
        alertType.accept()
    })
    const frame = page.frameLocator("#iframeResult")
    await frame.locator("//button[text()='Try it']").click()
    await expect(frame.locator("#demo")).toHaveText("You pressed OK!")
})
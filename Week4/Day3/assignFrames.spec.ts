import {test,expect} from "@playwright/test";

test("Frame handling",async({page})=>{
await page.goto("https://leafground.com/frame.xhtml")

const frame1=page.frameLocator("iframe[src='default.xhtml']")
await frame1.locator("#Click").waitFor()
await frame1.locator("#Click").click()
await expect(frame1.locator("#Click")).toHaveText("Hurray! You Clicked Me.")

const numberofFrames=page.frames()
console.log("Number of frames in the page is "+numberofFrames.length)   

const frame2=page.frame({name:"frame2"})
if(!frame2){
    throw new Error("Frame2 is not found")
}
await frame2.locator("#Click").click()
await expect(frame2.locator("#Click")).toHaveText("Hurray! You Clicked Me.")





})
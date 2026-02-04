import test from '@playwright/test'
const { chromium, webkit } = require('playwright')
test("Load the URL",async()=>{
    const edgeBrowser = await chromium.launch({channel:'msedge'})
    const edgeContext = await edgeBrowser.newContext()
    const edgePage = await edgeContext.newPage()
    await edgePage.goto("https://www.redbus.in")
    const redBusTitle = await edgePage.title()
    const redBusURL = edgePage.url()
    console.log('--- RedBus (Edge Browser) ---');
    console.log('Title:', redBusTitle);
    console.log('URL:', redBusURL);

    const webkitBrowser = await webkit.launch()
    const webkitContext = await webkitBrowser.newContext()
    const webkitPage = await webkitContext.newPage()
    await webkitPage.goto("https://www.flipkart.com")
    const flipkartTitle = await webkitPage.title()
    const flipkartURL = webkitPage.url()
    console.log('--- Flipkart (Webkit Browser) ---');
    console.log('Title:', flipkartTitle);
    console.log('URL:', flipkartURL);

    await  edgePage.waitForTimeout(5000)
    await  webkitPage.waitForTimeout(5000)

    await edgeBrowser.close();
    await webkitBrowser.close();

})
let browser="Chrome"      //declaring global variable               
function checkBrowserVersion(callback)   //creating function that accepts call back
{
    setTimeout(function()     //simulate async delay (2 secs)
{
    callback(browser)    //invoke call back & pass browser value
    
},2000)
}

function showBrowserVersion(version)       //write a callback function
{
    console.log("Browser version using Callback: ",version)
}

checkBrowserVersion(showBrowserVersion)   //call the function and pass the callback
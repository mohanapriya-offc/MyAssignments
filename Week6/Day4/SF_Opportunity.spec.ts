import test from '@playwright/test'
import { expect } from '@playwright/test'

let accessToken:any
let InstanceUrl:any

test.describe.serial("Sales Force API Tests", () => {


let Opportunity_Id:any


test("Generate the token",async({request})=>{



const reqToken= await request.post('https://login.salesforce.com/services/oauth2/token',{


    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },


    form:{
"grant_type":"password",
"username":"manikandanleo4922@agentforce.com",
"password":"India@2026",
"client_id":"3MVG9dAEux2v1sLs_5LgrWbWWJbMYKRgBajBibwGyik0pC_tXNFGsk6aV8h1owvGj6hsaxRWhzGX5WP1O87h5",
"client_secret":"EE7E666EF8204C869125AC8160C78B0F93277C544B84F8B89A0D59AD9FB3AD1C"
    }


})


const res=await reqToken.json()
accessToken=res.access_token
InstanceUrl=res.instance_url


console.log(accessToken +" "+InstanceUrl)


})


test("SF_Create_Opportunity",async({request})=>{


const response=await request.post(`${InstanceUrl}/services/data/v65.0/sobjects/Opportunity`,{


headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`
},
data:{
  "Name": "Mani",
  "StageName": "Prospecting",
  "CloseDate": "2025-03-15"
}


})


const res = await response.json()
Opportunity_Id=res.id 
console.log(Opportunity_Id)


})

test("SF_PATCH_Opportunity",async({request})=>{


const response=await request.patch(`${InstanceUrl}/services/data/v65.0/sobjects/Opportunity/${Opportunity_Id}`,{



headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`
},
data:{
    "Type": "New Customer",
    "StageName": "Prospecting"
}


})


const sts= response.status()
expect(sts).toEqual(204)

})

test("SF_Get_Opportunity",async({request})=>{


const response=await request.get(`${InstanceUrl}/services/data/v59.0/query/?q=SELECT+Id,Name,StageName+FROM+Opportunity`,{


headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`
},

})


const resp=await response.json()
console.log(resp)


const sts= response.status()
expect(sts).toEqual(200)

})




test("SF_DELETE_Opportunity",async({request})=>{


const response=await request.delete(`${InstanceUrl}/services/data/v65.0/sobjects/Opportunity/${Opportunity_Id}`,{


headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`
},

})


const sts= response.status()
expect(sts).toEqual(204)

})

})
import test, { expect } from '@playwright/test'


const username='admin'
const password='slBB0^k9l^YU'
const login=`${username}:${password}`


const value=btoa(login)
console.log(value)


let sys_ID:any


test("SN API testing - POST",async({request})=>{


const response=await request.post("https://dev362368.service-now.com/api/now/table/change_request",{


headers:{
    "Content-Type":"application/json",
    "Authorization": `Basic ${value}`
},


data:{
    "short_description": "ChangeRequest Creation"
}
})


const res=await response.json()
console.log(res)


const status=response.status()
expect(status).toEqual(201)


sys_ID=res.result.sys_id
console.log(sys_ID)



})


test("GET",async({request})=>{
    
const res1=await request.get(`https://dev362368.service-now.com/api/now/table/incident/${sys_ID}`,{


    headers:{
    "Authorization": `Basic ${value}`
},
})


const resp=await res1.json()
console.log(resp)


const sts= res1.status()
expect(sts).toEqual(200)


})

test("PATCH",async({request})=>{
    
const res1=await request.patch(`https://dev362368.service-now.com/api/now/table/incident/${sys_ID}`,{


    headers:{
    "Authorization": `Basic ${value}`
},

data:{
    "short_description": "ChangeRequest Updated"
}
})

const resp=await res1.json()
console.log(resp)

const sts= res1.status()
expect(sts).toEqual(200)

})

test("DELETE",async({request})=>{
    
const res1=await request.delete(`https://dev362368.service-now.com/api/now/table/incident/${sys_ID}`,{


    headers:{
    "Authorization": `Basic ${value}`
},
})


const resp=await res1.json()
console.log(resp)


const sts= res1.status()
expect(sts).toEqual(204)


})
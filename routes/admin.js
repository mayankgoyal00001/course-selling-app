const express=require("express")
const adminrouter=express();

adminrouter.post("/signup",(req,res)=>{
    res.json({
        message:"Signupendpoint"
    })
})


adminrouter.post("/signin",(req,res)=>{
    res.json({
        message:"Signupendpoint"
    })
})


adminrouter.post("/course",(req,res)=>{
    res.json({
        message:"Signupendpoint"
    })
})


adminrouter.put("/course",(req,res)=>{
    res.json({
        message:"Signupendpoint"
    })
})


adminrouter.get("/course/bulk",(req,res)=>{
    res.json({
        message:"Signupendpoint"
    })
})

module.exports={
    adminrouter:adminrouter
}
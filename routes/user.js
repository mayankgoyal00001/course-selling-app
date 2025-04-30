const express=require("express")
const userrouter=express();


userrouter.post("/signup",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


userrouter.post("/signin",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


userrouter.post("/purchases",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


module.exports={
    userrouter:userrouter
}
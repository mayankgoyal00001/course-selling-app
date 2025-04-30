const express=require("express")
const app=express();


app.post("/user/signup",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


app.post("/user/signin",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


app.post("/user/purchases",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


app.post("/course/purchase",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


app.post("/courses",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


app.listen(3000)
const express=require("express")
const courserouter=express();


courserouter.post("/purchase",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


courserouter.post("/preview",(req,res)=>{
    res.json({
        message:"Hey this is mayank goyal"
    })
})


 module.exports={
    courserouter:courserouter
 }

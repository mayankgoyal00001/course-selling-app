const mongoose=require("mongoose")
console.log("connected to")
mongoose.connect("mongodb://localhost:27017/course-selling-app")
const schema=mongoose.Schema
const objectId=mongoose.Types.ObjectId



const userschema=new schema({
    email:{
        type:String,
        unqiue:true
    },
    password:String,
    firstname:String,
    lastname:String
})


const adminschema=new schema({
    email:{
        type:String,
        unqiue:true
    },
    password:String,
    firstname:String,
    lastname:String
})


const courseschema=new schema({
    title:String,
    description:String,
    price:String,
    imageurl:String,
    creatorId:objectId
})


const purchaseschema=new schema({
    userid:objectId,
    courseid:objectId
})

const usermodel=mongoose.model("user",userschema)
const adminmodel=mongoose.model("admin",adminschema)
const coursemodel=mongoose.model("course",courseschema)
const purchasemodel=mongoose.model("purchase",purchaseschema)

module.exports={
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}
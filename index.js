const express=require("express")
const {userrouter}=require("./routes/user")
const {courserouter}=require("./routes/course")
const app=express();

app.use("/user",userrouter)
app.use("/user",courserouter)

app.listen(3000)
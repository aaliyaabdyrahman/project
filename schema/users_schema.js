const mongoose = require('mongoose')


const Userschema = new mongoose.Schema({
    name:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, required:true},
    status:{type:String,default:"avtive", unum:["active","pending"]}
   
},{timestamps:true})

const usermodel = mongoose.models.user || mongoose.model("user",Userschema)

module.exports=usermodel
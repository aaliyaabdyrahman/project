const mongoose =require('mongoose')

const guryoSchema = new mongoose.Schema({
    type:{type:String, required:true},
    area:{type:String, required:true},
    address:{type:String, required:true },
    age:{type:Number,required:true},
    deposit:{type:String, default:"yes", enum:["yes","no"]},
    parking:{type:String,default:"yes", enum:["yes","no"]},
    imagePreview:{type:String, required:true },
    isAvailable:{type:String, default:"yes", enum:["yes","no"]},
    rooms:{type:String, required:true },
    bathrooms:{type:String, required:true },
    masterRoom:{type:String,default:"yes", enum:["yes","no"]},
    faahfahin:{type:String, required:true },
    user:{type:String, required:true },

},{timestamps:true})
const Guryomodel = mongoose.models.guryo || mongoose.model("guryo", guryoSchema)

module.exports=Guryomodel;
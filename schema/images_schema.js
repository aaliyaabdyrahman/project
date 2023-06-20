const mongoose = require('mongoose')

const imageschema = new mongoose.Schema({
    guryo_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"guryo"
    },
    image_Url:{
        type:String,
        required:true
    }
},{timestamps:true})
const imagemodel = mongoose.models.image || mongoose.model("image",imageschema)

module.exports=imagemodel
const express = require('express')
const img =express()

const imagemodel = require('../schema/images_schema')
const Joi = require('joi')

//get
img.get('',async(req,res)=>{
    const getimage= await imagemodel.find().populate({
        path:"guryo_id",
        model:"guryo"
    })
    res.json(getimage)
})
//validation
const imgvalidate = (imagedata)=>{
    const images = Joi.object({
        guryo_id:Joi.string().required(),
        image_Url:Joi.string().required()
    })
    return images.validate(imagedata)
}
//post
img.post('',async(req,res)=>{
    const {error} = imgvalidate(req.body)
    if(error){
        return res.json(error.message)
    }
    const postimage= await imagemodel(req.body)
    await postimage.save()
    res.json({status:"inserted",image:postimage})
})
//getbyid
img.get('/:id',async(req,res)=>{
    const mid = req.params.id
    const getoneimage= await imagemodel.findById(mid)
    res.json(getoneimage)
})
//put
img.put('/:id',async(req,res)=>{
    const mgid=req.params.id
    const putimage= await imagemodel.findByIdAndUpdate(mgid,req.body,{new:true})
    res.json({status:"updated",image:putimage})
})
//delete
img.delete('/:id',async(req,res)=>{
    const mggid =req.params.id
    const delimage= await imagemodel.findByIdAndDelete(mggid)
    res.json("deleted")
})

module.exports=img


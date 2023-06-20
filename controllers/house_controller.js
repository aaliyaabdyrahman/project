const express = require('express')
const exp = express()
const Guryomodel =require ('../schema/house_schema')
const Joi = require('joi')

exp.get('',async(req,res)=>{
    const getguryo = await Guryomodel.find()
    res.json(getguryo)
})
const guryvalidate = (guryodata)=>{
    const guryyos =Joi.object({
        type:Joi.string().required(),
        area:Joi.string().required(),
        address:Joi.string().required(),
        age:Joi.number().required(),
        deposit:Joi.string().required(),
        parking:Joi.string().required(),
        imagePreview:Joi.string().required(),
        isAvailable:Joi.string().required(),
        rooms:Joi.string().required(),
        bathrooms:Joi.string().required(),
        masterRoom:Joi.string().required(),
        faahfahin:Joi.string().required(),
        user:Joi.string().required()
    })
    return guryyos.validate(guryodata)
}
exp.post('',async(req,res)=>{
    const {error} = guryvalidate(req.body)
    if(error){
        return res.json(error.message)
    }
    const postguryo = await Guryomodel(req.body)
    await postguryo.save()
    res.json({status:"inserted",guryo:postguryo})
})
exp.get('/:id',async(req,res)=>{
    const gid = req.params.id
    const getoneguri = await Guryomodel.findById(gid)
    res.json({getoneguri})
})
exp.put('/:id',async(req,res)=>{
    const guid = req.params.id
    const putguryo = await Guryomodel.findByIdAndUpdate(guid,req.body,{new:true})
    res.json({status:"updated",guryo:putguryo})
})
exp.delete('/:id',async(req,res)=>{
    const guriid =req.params.id
    const deleteguryo = await Guryomodel.findByIdAndDelete(guriid)
    res.json("deleted")
})


module.exports =exp
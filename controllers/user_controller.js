const express = require('express')
const user=express()
const joi =require('joi')
const usermodel = require('../schema/users_schema')

user.get('',async(req,res)=>{
    const getuser = await usermodel.find()
    res.json(getuser)
})
user.get('/:id',async(req,res)=>{
    const userid =req.params.id
    const getoneuser = await usermodel.findById(userid)
    res.json(getoneuser)
})
const uservalidate = (userdata)=>{
    const users = joi.object({
        name:joi.string().required(),
        username:joi.string().required(),
        password:joi.string().required(),
        status:joi.string().required(),
        role:joi.string().required()
    })
    return users.validate(userdata)
    
}

user.post('',async(req,res)=>{
    const{error} = uservalidate(req.body)
    if(error){
        return res.json(error.message)
    }
    const postuser = await usermodel(req.body)
    await postuser.save()
    res.json({status:"inserted",user:postuser})
})

user.put('/:id',async(req,res)=>{
    const uid = req.params.id
    const putuser = await usermodel.findByIdAndUpdate(uid,req.body,{new:true})
    res.json({status:"updated",user:putuser})
})

user.delete('/:id',async(req,res)=>{
    const useid = req.params.id
    const deleteuser = await usermodel.findByIdAndDelete(useid)
    res.json("deleted")
})

module.exports=user


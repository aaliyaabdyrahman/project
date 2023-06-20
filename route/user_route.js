const express =require('express')
const users=express.Router();

const user =require('../controllers/user_controller')

users.get('/',user)
users.get('/:id',user)
users.post('/',user)
users.put('/:id',user)
users.delete('/:id',user)

module.exports=users
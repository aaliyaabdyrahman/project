const express =require ('express')
const guryoos = express.Router();
const exp =require('../controllers/house_controller')

guryoos.get('/',exp)
guryoos.get('/:id',exp)
guryoos.post('/',exp)
guryoos.put('/:id',exp)
guryoos.delete('/:id',exp)

module.exports=guryoos;


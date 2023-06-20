const express =require ('express')
const images = express.Router();
const img =require('../controllers/image_controller')

images.get('/',img)
images.get('/:id',img)
images.post('/',img)
images.put('/:id',img)
images.delete('/:id',img)

module.exports=images;

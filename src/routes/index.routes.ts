import {Router} from 'express';
const router = Router();
import {createPhoto,getPhoto,getOne,deleteOne,upPhoto} from '../controllers/index.controllers'
import multer from '../libraries/multer'

router.route('/photos')
 .get(getPhoto)
 .post(multer.single('image') ,createPhoto)

 router.route('/photos/:id')
 .get(getOne)
 .delete(deleteOne)
 .put(upPhoto)

export default router
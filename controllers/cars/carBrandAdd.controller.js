import models from '../../models/index.js';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname =  Date.now() +"_" + file.originalname   )
    }
  })
const upload = multer({ storage: storage })

export default async function(req,res){
     const data = req.body;
     const logo = '/img/' + req.file.originalname;
     await models.cars.createBrand(data,logo);
     res.render('success', {message: 'Brand Added', redirect: '/cars', delay: 2000});   
}
 
export {
    upload,
}

import { CarData } from "../models/addCar.js";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname  )
    }
  })
const upload = multer({ storage: storage })



async function CarDataPost(req,res){
     const data = req.body;
     const thumbnail = '/img/' + req.file.originalname;
     await CarData(data,thumbnail);
     res.render('success', {message: 'Car Added', redirect: '/cars/upsert', delay: 2000});   
}
 
export {
    CarDataPost,
    upload
}

import { CarEdit } from "../models/editCar.js";
import { getCarById } from "../models/getCarById.js";

import multer from 'multer';



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,file.originalname  )//file.fieldname+ '-' + uniqueSuffix
    }
  })
  
  const upload = multer({ storage: storage })

async function getCarEditPage(req,res)  { 
    const carId = req.params.id;
    const car = await getCarById(carId);
    if (car) {
        res.render("carEdit",car);
    } else {
        res.render("404");
    }


}

async function CarEdithandler(req,res){
    const carId = req.params.id;
    const data = req.body;
    const thumbnail = '/img/' + req.file.originalname;
    await CarEdit(carId,data,thumbnail);
    res.render('success', {message: 'Car Edited', redirect: '/car-list', delay: 2000});
}

export {
    getCarEditPage,
    CarEdithandler
}
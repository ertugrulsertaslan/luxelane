import { CarData } from "../models/addCar.js";
import multer from 'multer';

//import { validationResult } from "express-validator";

import validator from 'express-validator'
const { check, validationResult } = validator

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

function getCarAddPage (req,res) { 
    res.render("carAdd");
    
}
const carValidationPost = (req,res,next)=> {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        const alert = errors.array();
        res.render('carAdd',{  alert });
      }      
}

async function CarDataPost(req,res){
  
     const data = req.body;
     const thumbnail = '/img/' + req.file.originalname;
     await CarData(data,thumbnail);
     res.render('success', {message: 'Car Added', redirect: '/car-add', delay: 2000});   
}



/*    ORİGİNAL
async function CarDataPost(req,res){
   
    const thumbnail = '/img/' + req.file.originalname;
    const data = req.body;//req.body
    await CarData(data,thumbnail);
    res.render('success', {message: 'Car Added', redirect: '/car-add', delay: 2000});
}
*/
export {
    CarDataPost,
    getCarAddPage,
    upload,
    carValidationPost
}

import { CarData } from "../models/addCar.js";
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


function getCarAddPage (req,res) { 
    res.render("carAdd");
 
}

async function CarDataPost(req,res){
  
    const data = req.body;
    //req.file.destination
    const thumbnail = '/img/' + req.file.originalname;
    console.log(thumbnail);
    await CarData(data,thumbnail);
    res.render('success', {message: 'Car Added', redirect: '/car-add', delay: 2000});
}



export {
    CarDataPost,
    getCarAddPage,
    upload
}

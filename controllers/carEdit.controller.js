import { CarEdit } from "../models/editCar.js";
import { getCarById } from "../models/getCarById.js";

async function getCarEditPage(req,res)  { 
    const carId = req.params.id;
    const car = await getCarById(carId);
    if (car) {
        res.render("cars/carEdit",car);
    } else {
        res.render("404");
    }
}

async function CarEdithandler(req,res){
    const carId = req.params.id;
    const data = req.body;
    const thumbnail = '/img/' + req.file.originalname;
    await CarEdit(carId,data,thumbnail);
    res.render('success', {message: 'Car Edited', redirect: '/cars', delay: 2000});
}

export {
    getCarEditPage,
    CarEdithandler,
}
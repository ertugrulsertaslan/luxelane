import { CarEdit } from "../models/editCar.js";
import { getCarById } from "../models/getCarById.js";

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
    await CarEdit(carId,data);
    res.render('success', {message: 'Car Edited', redirect: '/car-list', delay: 2000});
}


export {
    getCarEditPage,
    CarEdithandler
}
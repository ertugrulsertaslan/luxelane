import models from "../../models/index.js";

export default async function(req,res)  { 
    const carId = req.params.id;
    const car = await models.cars.getById(carId);
    console.log(car);
    if (car) {
        res.render("cars/carEdit",car);
    } else {
        res.render("404");
    }
}
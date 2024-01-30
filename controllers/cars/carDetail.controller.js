import models from "../../models/index.js";

export default async function(req,res)  {
    const carId = req.params.id;
    const car = await models.cars.getById(carId);   
    if (car) {
        res.render("cars/carDetail", car);
    } else {
        res.render("404");
    } 
}

import models from "../../models/index.js";

export default async function(req,res)  {
    const carId = req.params.id;
    const cars = await models.cars.filterCar(carId);
    const cartypes = await models.cars.getCarType();
    if (cars) {
        res.render("cars/carfiltertypeList", {cars: cars ,cartypes : cartypes });
    } else {
        res.render("404");
    } 
}

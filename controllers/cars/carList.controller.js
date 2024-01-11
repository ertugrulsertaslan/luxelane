import models from "../../models/index.js";

export default async function (req,res) {
    const cars = await models.cars.getAllCars();
    res.render("cars/carList", { cars: cars });
}
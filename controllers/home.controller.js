import models from "../models/index.js";

export default async function(req,res) {
    let count = 3;
    const cars = await models.cars.getAllCars(count);
    res.render("index", { cars: cars });
}

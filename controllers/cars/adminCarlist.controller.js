import models from "../../models/index.js";

export default async function (req,res) {
    let count = 20;
    const cars = await models.cars.getAllCars(count);
    res.render("cars/adminCarlist", { cars: cars });
}

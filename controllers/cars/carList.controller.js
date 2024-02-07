import models from "../../models/index.js";

export default async function (req,res) {
    let count = 20;
    const cars = await models.cars.getViewCars(count);
    const cartypes = await models.cars.getCarType();
    res.render("cars/carList", { cars: cars , cartypes : cartypes});
}

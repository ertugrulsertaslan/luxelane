import models from "../../models/index.js";

export default async function (req,res) {
    let count = 20;
    const user = req.session.user;
    const cars = await models.cars.getAllCars(count);
    const cartypes = await models.cars.getCarType();
    res.render("cars/adminCarlist", { cars: cars , cartypes : cartypes, user});
}

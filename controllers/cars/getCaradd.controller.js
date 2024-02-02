import models from "../../models/index.js";

export default async function (req,res) {
    const brands = await models.cars.getBrand();
    res.render("cars/carAdd", { brands: brands });
}

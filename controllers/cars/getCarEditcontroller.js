
import models from "../../models/index.js";

export default async function(req,res)  { 
    
    const carId = req.params.id;
    const car = await models.cars.getCarAndBrandById(carId);
    const brand = await models.brand.getBrandById(car.brandId);
    const branchs = await models.branch.getBranch();
    const brands = await models.cars.getBrand();
    const cartypes = await models.cars.getCarType();
    if (car) {
        res.render("cars/carEdit",{car,brand,branchs,brands,cartypes});
    } else {
        res.render("404");
    }
}
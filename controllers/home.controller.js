import models from "../models/index.js";

export default async function(req,res) {

    const user = req.session.user;
    
    let count = 3;
    const branchs = await models.branch.getBranch();
    const cars = await models.cars.getAllCars(count);
    const carTypes = await models.cars.getCarType();
    
    res.render("index", { cars: cars , carTypes : carTypes , branchs : branchs,user});
}

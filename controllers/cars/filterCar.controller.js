import models from "../../models/index.js";

export default async function(req,res)  {

    const startDate = req.session.startDate;
    const endDate = req.session.endDate;
    const branchId =  req.session.branchId;
    const carId = req.params.id;
    const cars = await models.cars.filterCar(carId,branchId);
    const cartypes = await models.cars.getCarType();
    
    if (cars) {
        res.render("cars/carfiltertypeList", {cars: cars ,cartypes : cartypes ,startDate,endDate});
    } else {
        res.render("404");
    } 
}

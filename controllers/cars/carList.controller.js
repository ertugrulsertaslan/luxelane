import models from "../../models/index.js";

export default async function (req,res) {
    const startDate = req.session.PickUpDate +' '+ req.session.PickUpTime;
    const endDate =  req.session.DropOffDate +' '+ req.session.DropOffTime;
    let count = 20;
    const cars = await models.cars.getViewCars(count);
    const cartypes = await models.cars.getCarType();
    
    res.render("cars/carList", { cars: cars , cartypes : cartypes,startDate,endDate});
}

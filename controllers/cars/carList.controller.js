import models from "../../models/index.js";

export default async function (req,res) {

    const startDate = req.session.startDate;
    const endDate = req.session.endDate;

    let count = 20;
    const cartypes = await models.cars.getCarType();

    if(req.session.PickUpbranchId){
        
        const cars = await models.cars.getViewCarsFilterBranch(req.session.PickUpbranchId,count);
        //const brand = await models.brand.getBrandById(cars.brandId);

        res.render("cars/carList", { cars: cars , cartypes : cartypes, startDate, endDate });
    }else{
        const cars = await models.cars.getAllCars(count);
        //const brand = await models.brand.getBrandById(cars.brandId);

        res.render("cars/carList", { cars: cars , cartypes : cartypes, startDate, endDate });
    }
}
    
   

    

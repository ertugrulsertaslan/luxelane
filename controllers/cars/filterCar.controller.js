import models from "../../models/index.js";

export default async function(req,res)  {

    const memory = await models.tempmemory.getByMemory();

    const p = memory.PickUpDate;
    const pyear = p[0]+ p[1]+ p[2] + p[3];
    const pmonth = p[5] + p[6];
    const pday = p[8] + p[9];
    const pmin = p[11] + p[12];
    const psec = p[14] + p[15];

    const d = memory.DropOffDate; 
    const dyear = d[0]+ d[1]+ d[2] + d[3];
    const dmonth = d[5] + d[6];
    const dday = d[8] + d[9];
    const dmin = d[11] + d[12];
    const dsec = d[14] + d[15];

    const startDate = pday + '/' + pmonth + '/' + pyear + ' ' + pmin + ":" + psec ;
    const endDate = dday + '/' + dmonth + '/' + dyear + ' ' + dmin + ":" + dsec ;

    const carId = req.params.id;
    const cars = await models.cars.filterCar(carId,memory.PickUpbranchId);
    const cartypes = await models.cars.getCarType();
    
    if (cars) {
        res.render("cars/carfiltertypeList", {cars: cars ,cartypes : cartypes , startDate, endDate});
    } else {
        res.render("404");
    } 
}

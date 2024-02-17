import models from "../models/index.js";

export default async function(req,res)  {

    const startDate = req.session.PickUpDate +' '+ req.session.PickUpTime;
    const endDate = req.session.DropOffDate +' '+ req.session.DropOffTime;
    const startBranch = req.session.pickBranchId;
    const dropBranch = req.session.dropBranchId;

    const startBranchName = await models.order.getBranch(startBranch);
    const dropBranchName = await models.order.getBranch(dropBranch);

    const carId = req.params.id;
    const car = await models.order.getOrder(carId);

    const carBrand = await models.brand.getBrandById(car.brandId);


    const carPrice = Math.abs(car.hourlyPrice * (req.session.PickUpTime-req.session.DropOffTime));  
    if(req.session.user){
        const userId = req.session.user.id;
        res.render("order", {car,startDate,endDate,startBranchName,dropBranchName,userId,carPrice,carBrand});
    }
    else{
        res.render("order", {car,startDate,endDate,startBranchName,dropBranchName,carPrice,carBrand});
    }
}
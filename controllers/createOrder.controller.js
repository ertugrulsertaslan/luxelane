import models from "../models/index.js";

export default async function(req,res)  {
    if(req.session.user){
        const carId = req.params.id;
        const car = await models.order.getOrder(carId);

        const startDate = req.session.PickUpDate +' '+ req.session.PickUpTime;
        const endDate = req.session.DropOffDate +' '+ req.session.DropOffTime;
        const startBranch = req.session.pickBranchId;
        const dropBranch = req.session.dropBranchId;

        const carPrice = Math.abs(car.hourlyPrice * (req.session.PickUpTime-req.session.DropOffTime));
        const userId = req.session.user.id;

        const order = await models.order.create(userId,carId,startBranch,dropBranch,startDate,endDate,carPrice);
        res.render('success', {message: 'Order Added', redirect: '/users/profile', layout: false, delay: 2000,order});   
    }else{
        res.redirect('/users/login');
    }
    
}
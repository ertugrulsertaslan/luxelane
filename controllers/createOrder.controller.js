import models from "../models/index.js";

export default async function(req,res)  {
    if(req.session.user){
        const carId = req.params.id;
        const car = await models.order.getOrder(carId);
        
        const memory = await models.tempmemory.getByMemory();
        
        const startBranch = memory.PickUpbranchId;
        const dropBranch = memory.DropOffbranchId;

        const start =  new Date(`${memory.PickUpDate}`);
        const end =  new Date(`${memory.DropOffDate}`);
        
        const carPrice =  (((end.getTime() - start.getTime()) / 1000) / 3600) * car.hourlyPrice ;
        
        const userId = req.session.user.id;

        const order = await models.order.create(userId,carId,startBranch,dropBranch,memory.PickUpDate,memory.DropOffDate,carPrice);
        res.render('success', {message: 'Order Added', redirect: '/users/profile', layout: false, delay: 2000,order});   
    }else{
        res.redirect('/users/login');
    }
    
}
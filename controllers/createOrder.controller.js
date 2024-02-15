import models from "../models/index.js";

export default async function(req,res)  {

    const carId = req.params.id;
    const startDate = req.session.PickUpDate +' '+ req.session.PickUpTime;
    const endDate = req.session.DropOffDate +' '+ req.session.DropOffTime;
    const startBranch = req.session.branchId;
    const dropBranch = req.session.branchId1;
    const startBranchName = await getBranchByIdModel(startBranch);
    const dropBranchName = await getBranchByIdModel(dropBranch);
    const userId = req.session.user.id;
    const data = userId+carId+startBranch+dropBranch+startDate+endDate+car;

    console.log(data);
     await models.order.create(userId,carId,startBranch,dropBranch,startDate,endDate,car);
     res.render('success', {message: 'Order Added', redirect: '/profile', layout: false, delay: 2000});   
 
    
}
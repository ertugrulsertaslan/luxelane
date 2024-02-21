import models from "../models/index.js";

export default async function(req,res)  {
    if(req.session.user){

        const carId = req.params.id;
        const car = await models.order.getOrder(carId);
        
        const startDate = req.session.startDate;
        const endDate = req.session.endDate;

        const p = req.session.startDate; // PickOffDate
        const pyear = p[6]+ p[7]+ p[8] + p[9];
        const pmonth = p[3] + p[4];
        const pday = p[0] + p[1];
        const pmin = p[11] + p[12];
        const psec = p[14] + p[15];

        const d = req.session.endDate; // DropOffDate
        const dyear = d[6]+ d[7]+ d[8] + d[9];
        const dmonth = d[3] + d[4];
        const dday = d[0] + d[1];
        const dmin = d[11] + d[12];
        const dsec = d[14] + d[15];
     
        const dbstartDate = pyear + '-' + pmonth + '-' + pday + 'T' + pmin + ":" + psec;
        const dbendDate  = dyear + '-' + dmonth + '-' + dday +'T'+ dmin + ":" + dsec ;

        
        
        const startBranch = req.session.PickUpbranchId;
        const dropBranch = req.session.DropOffbranchId;

        const start =  new Date(`${dbstartDate}`);
        const end =  new Date(`${dbendDate}`);
        
        const carPrice =   Math.abs((((end.getTime() - start.getTime()) / 1000) / 3600) * car.hourlyPrice );
        
        const userId = req.session.user.id;

        const order = await models.order.create(userId,carId,startBranch,dropBranch,dbstartDate,dbendDate,carPrice);
        res.render('success', {message: 'Order Added', redirect: '/users/profile', layout: false, delay: 2000,order});   
    }else{
        res.redirect('/users/login');
    }
    
}
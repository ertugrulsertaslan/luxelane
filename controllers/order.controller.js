import models from "../models/index.js";

export default async function(req,res)  {

    const user = req.session.user;

    const startDate = req.session.startDate;
    const endDate = req.session.endDate;

    if(req.session.startDate){
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

        const startBranchName = await models.order.getBranch(req.session.PickUpbranchId );
        const dropBranchName = await models.order.getBranch(req.session.DropOffbranchId);

        
        const carId = req.params.id;
        const car = await models.cars.getCarAndBrandById(carId);
        const carBrand = await models.brand.getBrandById(car.brandId);


        const start =  new Date(`${dbstartDate}`);
        const end =  new Date(`${dbendDate}`);

        const carPrice =  Math.abs((((end.getTime() - start.getTime()) / 1000) / 3600) * car.hourlyPrice );

        if(req.session.user){
            const userId = req.session.user.id;
            res.render("order", { car, startDate, endDate, startBranchName, dropBranchName, userId, carPrice, carBrand ,user });
        }
        else{
            res.render("order", { car, startDate, endDate, startBranchName ,dropBranchName ,carPrice ,carBrand ,user });
        }
    }else{
        res.redirect("/cars");
    }
    
}
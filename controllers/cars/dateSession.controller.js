import models from "../../models/index.js";

export default async function(req,res)  {


    const PickUpbranchId = req.body.pickBranchId;
    const DropOffbranchId = req.body.dropBranchId;

    const p = req.body.datepicker; // PickOffDate
    const pyear = p[6]+ p[7]+ p[8] + p[9];
    const pmonth = p[3] + p[4];
    const pday = p[0] + p[1];

    const d = req.body.datepicker1; // DropOffDate
    const dyear = d[6]+ d[7]+ d[8] + d[9];
    const dmonth = d[3] + d[4];
    const dday = d[0] + d[1];
     
   
    const startDate = pyear + '-' + pmonth + '-' + pday + 'T' + req.body.endDate.replace( "." , ":");
    const endDate  = dyear + '-' + dmonth + '-' + dday +'T'+ req.body.startDate.replace( "." , ":");


    await models.tempmemory.create();
    await models.tempmemory.insert(startDate,endDate,PickUpbranchId,DropOffbranchId);

    
    res.redirect('/cars'); 
}

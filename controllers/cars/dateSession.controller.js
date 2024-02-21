import models from "../../models/index.js";

export default async function(req,res)  {
    

    req.session.PickUpbranchId = req.body.pickBranchId;
    req.session.DropOffbranchId = req.body.dropBranchId;

   
    req.session.startDate = req.body.datepicker + " " + req.body.startDate;
    req.session.endDate  = req.body.datepicker1 + " " + req.body.endDate;

    res.redirect('/cars'); 
}

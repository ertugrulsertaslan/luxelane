import models from "../../models/index.js";

export default async function(req,res)  {

    req.session.PickUpDate = req.body.datepicker;
    req.session.PickUpTime = req.body.startDate;
    req.session.DropOffDate = req.body.datepicker1;
    req.session.DropOffTime = req.body.endDate;
    
    res.redirect('/cars'); 
}

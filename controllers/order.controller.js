import models from "../models/index.js";

export default async function(req,res)  {

    const carId = req.params.id;
    const car = await models.order.getOrder(carId);
    const startDate = req.session.startDate;
    const endDate = req.session.endDate;

    res.render("order", {car,startDate,endDate});
}
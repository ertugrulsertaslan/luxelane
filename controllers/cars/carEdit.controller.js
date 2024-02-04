import models from "../../models/index.js";

export default async function(req,res){
    const carId = req.params.id;
    const data = req.body;
    const thumbnail = '/img/' + req.file.originalname;
    await models.cars.update(carId,data,thumbnail);
    res.render('success', {message: 'Car Edited', redirect: '/cars', layout: false, delay: 2000});
}


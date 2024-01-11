import models from "../../models/index.js";

export default async function(req,res){
    const carId = req.params.id;
    const data = req.body;
    console.log(req.body);
    const thumbnail = '/img/' + req.file.originalname;
    await models.cars.update(carId,data,thumbnail);
    res.render('success', {message: 'Car Edited', redirect: '/cars', delay: 2000});
}


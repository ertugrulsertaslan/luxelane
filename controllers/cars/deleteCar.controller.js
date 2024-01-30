import models from "../../models/index.js";

export default async function(req,res)  {
    const carId = req.params.id;
    await models.cars.delete(carId);
    res.render('success', {message: 'Car deleted', redirect: '/cars/', delay: 2000});
}

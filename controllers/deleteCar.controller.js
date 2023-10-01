import { deleteCar } from "../models/deleteCar.js";



async function deleteCarHandler(req,res)  {
    const carId = req.params.id;
    await deleteCar(carId);
    res.render('success', {message: 'Car deleted', redirect: '/car-list', delay: 2000});
}

export {
    deleteCarHandler
}
import { deleteCar } from "../models/deleteCar.js";

async function deleteCarHandler(req,res)  {
    console.log("deleting");
    const carId = req.params.id;
    await deleteCar(carId);
    res.render('success', {message: 'Car deleted', redirect: '/cars/', delay: 2000});
}

export {
    deleteCarHandler
}
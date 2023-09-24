import { getCarById } from "../models/getCarById.js";


async function getCarDetailPage(req,res)  {
    const carId = req.params.id;
    const car = await getCarById(carId)

    if (car) {
        res.render("carDetail", car);
    } else {
        res.render("404");
    }
    
}

export {
    getCarDetailPage
}
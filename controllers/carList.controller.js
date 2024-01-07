import { getAllCars } from "../models/getAllCars.js";

async function getcarListPage (req,res) {
    const cars = await getAllCars();
    res.render("cars/carList", { cars: cars });
}
export {
    getcarListPage
}
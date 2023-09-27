import { getAllCars } from "../models/getAllCars.js";

async function getcarListPage (req,res) {
    const cars = await getAllCars();
    res.render("carList", { cars: cars });
}
export {
    getcarListPage
}
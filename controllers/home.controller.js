import { getAllCars } from "../models/getAllCars.js";


async function getHomePage (req,res) {
    const cars = await getAllCars();
    res.render("index", { cars: cars });
}
export {
    getHomePage
}
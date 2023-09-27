import { addCars } from "../models/addCar.js";

function getLoginPage (req,res) {
   
    
    res.render("login", addCars());
}
export {
    getLoginPage
}
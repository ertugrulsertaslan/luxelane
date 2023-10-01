import { CarData } from "../models/addCar.js";

function getCarAddPage (req,res) { 
    res.render("carAdd");
 
}
async function CarDataPost(req,res){
    const data = req.body;
    await CarData(data);
    res.render('success', {message: 'Car Added', redirect: '/car-add', delay: 2000});
}


export {
    CarDataPost,
    getCarAddPage
}

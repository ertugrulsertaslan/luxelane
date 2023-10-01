import { CarData } from "../models/addCar.js";

function getCarAddPage (req,res) { 
    res.render("carAdd");
 
}
async function CarDataPost(req,res){
    const data = req.body;
    await CarData(data);

    res.render('carAdd', {
        message: 'Car successfully added!'
    });
}


export {
    CarDataPost,
    getCarAddPage
}

import models from "../../models/index.js";

export default async function (req, res) {
      
        if(req.session.user){

                const user = req.session.user;
                const orders = await models.order.getOrderProfilePage(user.id);
                const car = await models.cars.getCarAndBrandById(orders.carId);
                res.render('users/userProfile', { user : user, orders : orders , car : car});
        }else{
                res.redirect('/users/login');
        }

} 

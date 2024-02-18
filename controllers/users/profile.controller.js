import models from "../../models/index.js";

export default async function (req, res) {
        
        if(req.session.user){
                
                const user = req.session.user; 
                const order = await models.order.getOrderProfilePage(user.id);
                if(order){
                        const car = await models.cars.getCarAndBrandById(order.carId); 
                        const pickUpBranch = await models.branch.getById(order.pickUpBranchId);
                        const dropOffBranch = await models.branch.getById(order.dropOffBranchId);
                        const start =  new Date(`${order.startDate}`);
                        const end =  new Date(`${order.endDate}`);
                        const price =  (((end.getTime() - start.getTime()) / 1000) / 3600) ;
                        console.log(price);
                res.render('users/userProfile', { user : user, order : order , car : car , pickUpBranch : pickUpBranch , dropOffBranch : dropOffBranch});
                }else{
                        res.render('users/userProfile',{ user : user });
                }      
        }else{
                res.redirect('/users/login');
        }

} 

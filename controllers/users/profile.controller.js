import models from "../../models/index.js";

export default async function (req, res) {
        
        if(req.session.user){
                const user = req.session.user; 
                const order = await models.order.getOrderProfilePage(user.id);
                if(order){

                        const car = await models.cars.getCarAndBrandById(order.carId);

                        const pickUpBranch = await models.branch.getById(order.pickUpBranchId);
                        const dropOffBranch = await models.branch.getById(order.dropOffBranchId);

                        const p = order.startDate;
                        const pyear = p[0]+ p[1]+ p[2] + p[3];
                        const pmonth = p[5] + p[6];
                        const pday = p[8] + p[9];
                        const pmin = p[11] + p[12];
                        const psec = p[14] + p[15];

                        const d = order.endDate; 
                        const dyear = d[0]+ d[1]+ d[2] + d[3];
                        const dmonth = d[5] + d[6];
                        const dday = d[8] + d[9];
                        const dmin = d[11] + d[12];
                        const dsec = d[14] + d[15];

                        
                        const startDate = pday + '/' + pmonth + '/' + pyear + ' ' + pmin + ":" + psec ;
                        const endDate = dday + '/' + dmonth + '/' + dyear + ' ' + dmin + ":" + dsec ;

                res.render('users/userProfile', { user : user, order , car , pickUpBranch , dropOffBranch , startDate, endDate });
                }else{
                        res.render('users/userProfile',{ user : user });
                }      
        }else{
                res.redirect('/users/login');
        }

} 

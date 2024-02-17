import models from '../../models/index.js';

export default async function(req,res){
     const data = req.body;
     const logo = '/img/' + req.file.originalname;
     await models.cars.createBrand(data,logo);
     
     res.render('success', {message: 'Brand Added', redirect: '/cars', layout: false, delay: 2000});   
}
 
import models from '../../models/index.js';

export default async function(req,res){
     const data = req.body;
     const thumbnail = '/img/' + req.file.originalname ;
     await models.cars.create(data,thumbnail);
     res.render('success', {message: 'Car Added', redirect: '/cars', layout: false, delay: 2000});   
}
 
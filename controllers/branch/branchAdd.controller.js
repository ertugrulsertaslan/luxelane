import models from '../../models/index.js';

export default async function(req,res){
     const data = req.body;
     await models.branch.create(data);
     res.render('success', {message: 'Branch Added', redirect: '/cars', layout: false, delay: 2000});   
}
 
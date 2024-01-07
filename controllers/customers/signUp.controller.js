import models from '../../models/index.js';

export default async function(req, res) {
    const data = req.body
    const tcPhoto = '/img/' + req.file.originalname;
    
    await models.customers.create(data, tcPhoto);
    
    res.render('success', {message: 'User Added', redirect: '/sign', delay: 2000});   
}

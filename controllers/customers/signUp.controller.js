import models from '../../models/index.js';

export default async function(req, res) {

    const data = req.body;
    data.password = await models.users.passwordEncryption(data.password);
    const tcPhoto = '/img/' + req.file.originalname;
    await models.customers.create(data, tcPhoto);
    
    res.render('success', {message: 'User Added ', redirect: '/users/sign-up', delay: 2000});   
}

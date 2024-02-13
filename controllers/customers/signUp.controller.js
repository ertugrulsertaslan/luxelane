import models from '../../models/index.js';

export default async function(req, res) {

    const { email } = req.body;
    const user = await models.users.getByEmail(email);
    const data = req.body;

   if(user){
        if(user.email == data.email){
            res.render('users/signUp', { errorMessage: 'Email has a already' });
            
        }else {
            data.password = await models.users.passwordEncryption(data.password);
            const tcPhoto = '/img/' + req.file.originalname;
            await models.customers.create(data, tcPhoto); 
            res.render('success', {message: 'User Added ', redirect: '/users/sign-up', layout: false, delay: 2000});   
        }
   }
   else{
    data.password = await models.users.passwordEncryption(data.password);
        const tcPhoto = '/img/' + req.file.originalname;
        await models.customers.create(data, tcPhoto); 
        res.render('success', {message: 'User Added ', redirect: '/users/sign-up', layout: false, delay: 2000});
   }
}

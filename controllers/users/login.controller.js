import models from "../../models/index.js";

export default async function (req, res) {

    const { email, password } = req.body;
    const user = await models.users.getByEmail(email);

    if (user) {
        let passwordsEqual = await models.users.passwordCompare(password,user.password);

        if(!passwordsEqual){
            res.render('users/login', { errorMessage: 'Email or password incorrect' });
        }else{
        req.session.user = {
            role: 'CUSTOMER',
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password:user.password,
        };
        res.render("success", {
            redirect: '/',
            layout: false,
            delay: 2000,
        });
    }
    }else{
        res.render('users/login', { errorMessage: 'Email or password incorrect' });
    }
} 

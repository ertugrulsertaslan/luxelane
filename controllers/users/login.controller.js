import models from "../../models/index.js";
import bcrypt from "bcrypt";

export default async function (req, res) {
    const { email, password } = req.body;

    const user = await models.users.getByEmail(email);

    let passwordsEqual = models.users.passwordCompare(password,user.password);

   if(!passwordsEqual){
    res.send("wrong");
   }else{
    if (user) {
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
            delay: 2000,
        });
    }else {
        res.render('users/login', { errorMessage: 'Email or password incorrect' });
    }





   }
    
}
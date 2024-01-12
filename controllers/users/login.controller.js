import models from "../../models/index.js";

export default async function (req, res) {
    const { email, password } = req.body;

    const user = await models.users.getByEmail(email);

   // const userPassword = await models.users.getByPassword(password);
    
    // TODO: Password compare

    if (user) {
        req.session.user = {
            role: 'CUSTOMER',
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            //password:userPassword
        };
        res.render("success", {
            redirect: '/',
            delay: 2000,
        });
    } else {
        res.render('users/login', { errorMessage: 'Email or password incorrect' });
    }

}
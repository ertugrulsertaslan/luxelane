export default async function (req, res) {
        const user = req.session.user;
        res.render('users/userProfile', user);
} 

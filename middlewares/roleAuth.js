export default function(role) {
    return async function (req, res, next) {

        if (!req.session.user) {
            return res.redirect('/users/login');
        }
        if (req.session.user.role === role) {
            next();
        } else {
            return res.render('404');
        }
    }
}
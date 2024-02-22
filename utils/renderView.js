export default function (view) {
    return async function (req, res) {
        const user = req.session.user;
        res.render(view,{  user : user });
    }
}
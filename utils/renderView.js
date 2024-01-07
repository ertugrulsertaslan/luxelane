export default function (view) {
    return async function (req, res) {
        res.render(view);
    }
}
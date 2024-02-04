import models from "../../models/index.js";

export default async function(req,res)  {
    const branchId = req.params.id;
    await models.branch.delete(branchId);
    res.render('success', {message: 'Branch deleted', redirect: '/branch', layout: false, delay: 2000});
}

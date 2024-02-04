import models from "../../models/index.js";

export default async function(req,res){

    const branchId = req.params.id;
    const data = req.body;
    await models.branch.update(branchId,data);

    res.render('success', {message: 'Branch Edited', redirect: '/branch', layout: false, delay: 2000});
}


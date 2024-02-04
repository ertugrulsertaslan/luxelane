import models from "../../models/index.js";

export default async function(req,res)  { 
    const branchId = req.params.id;
    const branchs = await models.branch.getById(branchId);
    if (branchs) {
        res.render("branch/branchEdit",branchs);
    } else {
        res.render("404");
    }
}
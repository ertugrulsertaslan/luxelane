import models from "../../models/index.js";

export default async function(req,res)  {

    const branchId = req.params.id;
    const branch = await models.branch.getById(branchId);

    if (branch) {
        res.render("branch/branchDetail", branch);
    } else {
        res.render("404");
    } 
    
}

import models from "../../models/index.js";

export default async function (req,res) {
    const branchs = await models.branch.getBranch();
    res.render("branch/branchList", { branchs: branchs });
}

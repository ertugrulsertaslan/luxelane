import { validationResult } from "express-validator";
export default function (view) {
    return async function (req, res, next) {
        const result = validationResult(req);
        if(!result.isEmpty()){
            const errors =  result.array();

            res.render(view, {  errors: errors, values: req.body });
        } else {
            next();
        } 
    }
}
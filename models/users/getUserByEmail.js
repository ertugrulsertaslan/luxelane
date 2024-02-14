import { db } from "../../db.js";

export default function (email) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user WHERE email=?`;
        db.get(sql, [email], (err, result) => {
            if (err) {
                reject(err);
            }  
            resolve(result ||  null);
        });
    });
    
}
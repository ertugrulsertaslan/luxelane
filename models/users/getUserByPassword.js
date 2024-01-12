import { db } from "../../db.js";

export default function (password) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user WHERE password=?`;
        db.get(sql, [password], (err, result) => {
            if (err) {
                reject(err);
            }  

            resolve(result ||  null);
        });
    });
    
}
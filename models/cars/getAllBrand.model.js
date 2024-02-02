import { db } from "../../db.js";

export default function(){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM brand `;
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);  
        });
    });
};
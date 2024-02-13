import { db } from "../../db.js";

export default function(id, count = 10){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM car WHERE branchId = ? LIMIT '${count}'  `;
        db.all(sql, [id],(err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows);
            resolve(rows);  
        });
    });
};

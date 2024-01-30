import { db } from "../../db.js";

export default function(count = 10){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM car LIMIT '${count}' `;
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows);
            resolve(rows);
           
            
        });
    });
};

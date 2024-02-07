import { db } from "../../db.js";

export default function(id) {
    return new Promise((resolve, reject) => { 
    const sql = `SELECT * FROM car WHERE carTypeId=? `;
    db.all(sql,[id],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}


import { db } from "../../db.js";

export default function(id,branchId) {
    return new Promise((resolve, reject) => { 
    const sql = `SELECT * FROM car WHERE carTypeId=? and branchId=? `;
    db.all(sql,[id,branchId],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}


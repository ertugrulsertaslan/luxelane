import { db } from "../../db.js";

export default function(data,logo) {
    return new Promise((resolve, reject) => { 
    const sql = `INSERT INTO brand ('name', 'logo') 
    VALUES (?,?)`;
    db.run(sql,[data.name,logo],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}



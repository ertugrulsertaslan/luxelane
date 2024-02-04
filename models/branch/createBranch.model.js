import { db } from "../../db.js";

export default function(data) {
    return new Promise((resolve, reject) => { 
    const sql = `INSERT INTO branch ('name', 'address', 'phone') 
    VALUES (?,?,?)`;
    db.run(sql,[data.name,data.address,data.phone],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}



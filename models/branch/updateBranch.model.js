import { db } from "../../db.js";

export default function(id,data) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE branch  SET name = ?,  address = ?,phone = ?
      WHERE id=?`;
      db.run(sql,[data.name,data.address,data.phone,id],(err, rows) => {
          if (err) {
              reject(err);
          }
          resolve(rows);
      });
  }); 
}




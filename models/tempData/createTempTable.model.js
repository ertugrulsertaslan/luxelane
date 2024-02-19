import { db } from "../../db.js";

export default function(startDate,endDate,PickUpbranchId,DropOffbranchId) {
    return new Promise((resolve, reject) => { 
    const sql = `INSERT INTO temp_employee ('PickUpDate', 'DropOffDate','PickUpbranchId','DropOffbranchId') 
    VALUES (?,?,?,?)`;
    db.run(sql,[startDate,endDate,PickUpbranchId,DropOffbranchId],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}



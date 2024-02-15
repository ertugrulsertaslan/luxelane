import { db } from "../../db.js";

export default function(userId,carId,startBranch,dropBranch,startDate,endDate,car) {
    return new Promise((resolve, reject) => { 
    const sql = `INSERT INTO order ('customerId', 'carId','pickUpBranchId','dropOffBranchId','startDate','endDate','price') 
    VALUES (?,?,?,?,?,?,?)`;
    db.run(sql,[userId,carId,startBranch,dropBranch,startDate,endDate,car.carId],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}



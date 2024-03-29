import { db } from "../../db.js";

export default function(data,thumbnail) {
    return new Promise((resolve, reject) => { 
    const sql = `INSERT INTO car ('carTypeId', 'model','hp','seats','hourlyPrice','thumbnail','fuel','transmission','bodyType','doors','minDriverAge','minLicenseAge','zeroToHundredKmh', 'status', 'branchId', 'brandId') 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    db.run(sql,[data.carTypeId,data.model,data.hp,data.seats,data.hourlyPrice,thumbnail,data.fuel,data.transmission,data.bodyType,data.doors,data.minDriverAge,data.minLicenseAge,data.zeroToHundredKmh, data.status, data.branchId, data.brandId],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}



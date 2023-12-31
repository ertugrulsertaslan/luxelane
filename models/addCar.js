import { db } from "../db.js";
//
function CarData(data,thumbnail) {
    return new Promise((resolve, reject) => {
    // Query db
    const sql = `INSERT INTO car ('brand','model','hp','seats','hourlyPrice','thumbnail','fuel','transmission','bodyType','doors','minDriverAge','minLicenseAge','zeroToHundredKmh', 'status', 'branchId') 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)`;
    
    // !!! TODO: GET THIS VALUE FROM data PARAMETER
    const branchId = 1;

    db.run(sql,[data.brand,data.model,data.hp,data.seats,data.hourlyPrice,thumbnail,data.fuel,data.transmission,data.bodyType,data.doors,data.minDriverAge,data.minLicenseAge,data.zeroToHundredKmh, data.status, branchId],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
  
  }


export {
    CarData
}




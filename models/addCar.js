import { db } from "../db.js";
//
function CarData(data,thumbnail) {
    return new Promise((resolve, reject) => {
      // Query db
      const sql = `INSERT INTO car ('brand','model','hp','seats','hourlyPrice','thumbnail','fuel','transmission','bodyType','doors','minDriverAge','minLicenseAge','zeroToHundredKmh') 
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
     
      db.run(sql,[data.brand,data.model,data.hp,data.seats,data.hourlyPrice,thumbnail,data.fuel,data.transmission,data.bodyType,data.doors,data.minDriverAge,data.minLicenseAge,data.zeroToHundredKmh],(err, rows) => {
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




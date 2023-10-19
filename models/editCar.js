import { db } from "../db.js";


function CarEdit(id,data,thumbnail) {
    return new Promise((resolve, reject) => {
      // Query db
      const sql = `UPDATE car  SET brand = ?,  model = ?,hp = ?,seats = ?,hourlyPrice = ?,thumbnail = ?,fuel = ?,
      transmission = ?,bodyType = ?,doors = ?,minDriverAge = ?,minLicenseAge = ?,zeroToHundredKmh = ?
      WHERE id=?`;
     
      db.run(sql,[data.brand,data.model,data.hp,data.seats,data.hourlyPrice,thumbnail,data.fuel,data.transmission,data.bodyType,data.doors,data.minDriverAge,data.minLicenseAge,data.zeroToHundredKmh,id],(err, rows) => {
          if (err) {
              reject(err);
          }
  
          resolve(rows);
      });
  });
  
  }


export {
    CarEdit
}




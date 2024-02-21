import { db } from "../../db.js";

export default function(id,data,thumbnail) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE car  SET brandId = ?,  model = ?,hp = ?,seats = ?,hourlyPrice = ?,thumbnail = ?,fuel = ?,
      transmission = ?,bodyType = ?,doors = ?,minDriverAge = ?,minLicenseAge = ?,zeroToHundredKmh = ?
      WHERE id=?`;
      db.run(sql,[data.brandId,data.model,data.hp,data.seats,data.hourlyPrice,thumbnail,data.fuel,data.transmission,data.bodyType,data.doors,data.minDriverAge,data.minLicenseAge,data.zeroToHundredKmh,id],(err, rows) => {
          if (err) {
              reject(err);
          }
          resolve(rows);
      });
  }); 
}




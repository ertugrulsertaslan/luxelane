import { db } from "../../db.js";

export default function(id) {
    return new Promise((resolve, reject) => {
        const sql = ` SELECT car.id, car.model, car.hp, car.seats ,car.hourlyPrice, car.thumbnail, car.fuel, car.transmission,
        car.bodyType, car.doors, car.minDriverAge, car.minLicenseAge, car.zeroToHundredKmh, car.status,
        car.carTypeId, car.branchId, car.brandId, brand.name, brand.logo FROM car INNER JOIN brand ON brand.id = car.brandId WHERE car.id=?;`;
        db.all(sql,[id],(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows[0]);
        });
    });
};

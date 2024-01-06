import { db } from "../db.js";

function getAllCars() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM car `;

        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }

            resolve(rows);
        });
    });
};
export {
    getAllCars
}

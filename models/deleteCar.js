import { db } from "../db.js";

function deleteCar(id) {
    return new Promise((resolve, reject) => {
        // Query db
        const sql = `DELETE FROM car WHERE id=?`;

        db.all(sql,[id],(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};
export {
    deleteCar
}
import { db } from "../db.js";

function getCarById(id) {
    return new Promise((resolve, reject) => {
        // Query db
        const sql = `SELECT * FROM car WHERE id=?`;

        db.all(sql,[id],(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows[0]);
        });
    });
};
export {
    getCarById
}


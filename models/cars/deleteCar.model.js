import { db } from "../../db.js";

export default function(id) {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM car WHERE id=?`;
        db.all(sql,[id],(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

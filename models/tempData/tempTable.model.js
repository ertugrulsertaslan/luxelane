import { db } from "../../db.js";

export default function() {
    return new Promise((resolve, reject) => {
        const sql = ` CREATE TEMPORARY TABLE temp_employee (
            id INTEGER,
            PickUpDate DATETIME,
            DropOffDate DATETIME,
            PickUpbranchId INTEGER,
            DropOffbranchId INTEGER,
            PRIMARY KEY(id)
        );`;
        db.all(sql,(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows[0]);
        });
    });
};

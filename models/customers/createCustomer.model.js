import { db } from "../../db.js";

export default async function(data, tcPhoto) {

    // insert user
    await new Promise((resolve, reject) => {
        const sql = `INSERT INTO 
        user ('firstName','lastName','email','password') 
        VALUES (?,?,?,?)`;

        db.run(sql,[data.firstName, data.lastName, data.email, data.password], (err, rows) => {
            if (err) {
                reject(err);
            }   
            resolve(rows);
        });
    });
    
    // get inserted user id 
    const insertedUserId = await new Promise((resolve, reject) => { 
        db.get("SELECT last_insert_rowid() as id", (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result.id);
        });
    });


    // insert customer with user id
    return new Promise((resolve, reject) => { 
        const sql = `INSERT INTO customer ('tc','tcPhoto','status','userId') 
        VALUES (?,?,?,?)`;
        db.run(sql, [data.tc, tcPhoto, data.status, insertedUserId], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });


}
import { db } from "../db.js";

function UserData(data) {
    
    return  new Promise((resolve, reject) => { 
    const sql = `INSERT INTO user ('firstName','lastName','email','password') 
    VALUES (?,?,?,?)`;
    
    db.run(sql,[data.firstName,data.lastName,data.email,data.password],(err, rows) => {
        if (err) {
            reject(err);
        }   
        resolve(rows);
    });
       
     db.get("SELECT last_insert_rowid() as id", function (err, row) {
        console.log('Last inserted id is: ' + row['id']);
        const userLastId = row['id']
        resolve(row['id']);
   });
    
  });
}
/*
function getUserId() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT last_insert_rowid() as id from user `;
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows);
            resolve(rows[0]);
        });
    });
};
*/
function getUserId(data) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT last_insert_rowid() as id from user `;
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows);
            resolve(rows[0]);
        });
    });
};


function CustomerData(data,tcPhoto,userId) {
    return new Promise((resolve, reject) => { 
    const sql = `INSERT INTO customer ('tc','tcPhoto','status','userId') 
    VALUES (?,?,?,?)`;
    // !!! TODO: GET THIS VALUE FROM data PARAMETER
    db.run(sql,[data.tc,tcPhoto,data.status,userId],(err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
    });
  });
}

export {
    UserData,
    CustomerData,
    getUserId
}

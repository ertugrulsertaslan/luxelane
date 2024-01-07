export default function (email) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user WHERE email=?`;

        db.run(sql, [email], (err, rows) => {
            if (err) {
                reject(err);
            }   
            resolve(rows.length > 0 ? rows[0]: []);
        });
    });
    
}
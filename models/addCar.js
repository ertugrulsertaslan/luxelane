import { db } from "../db.js";


function addCars() {
        // Query db
        const sql = "INSERT INTO car ('brand','model','hp','seats','hourlyPrice','thumbnail','fuel','transmission','bodyType','doors','minDriverAge','minLicenseAge','zeroToHundredKmh') VALUES ('Mercedes','Cls63','565','2','150','/img/cls63.png','GASOLINE','AUTOMATIC','COUPE','2','22','5','3.0')";

        db.run(sql, (err, rows) => {
            if (err) {
                reject(err);
                
            }
            console.log(rows);
            
        });         
  
};

export {
    addCars
}




import express from 'express';
import exphbs from 'express-handlebars';
import { db } from "../db.js";
import bodyParser from 'body-parser';

const app = express();

function getCarAddPage (req,res) {
    res.render("carAdd");
    
   
}


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


function getCar(req, res) {

    let brand = req.body.brand;
    let model = req.body.model;
    let hp = req.body.hp;
    let seats = req.body.seats;
    let hourlyPrice = req.body.hourlyPrice;
    let thumbnail = req.body.thumbnail;
    let fuel = req.body.fuel;
    let transmission = req.body.transmission;
    let bodyType = req.body.bodyType;
    let doors = req.body.doors;
    let minDriverAge = req.body.minDriverAge;
    let minLicenseAge = req.body.minLicenseAge;
    let zeroToHundredKmh = req.body.zeroToHundredKmh;
  
    
    // Send the response back
    res.send(brand + ' ' + model);
  
  
    return new Promise((resolve, reject) => {
      // Query db
      const sql = `INSERT INTO car ('brand','model','hp','seats','hourlyPrice','thumbnail','fuel','transmission','bodyType','doors','minDriverAge','minLicenseAge','zeroToHundredKmh') 
      VALUES ('${brand}','${model}','${hp}','${seats}','${hourlyPrice}','${thumbnail}','${fuel}','${transmission}','${bodyType}','${doors}','${minDriverAge}','${minLicenseAge}','${zeroToHundredKmh}')`;
  
      db.all(sql, (err, rows) => {
          if (err) {
              reject(err);
          }
  
          resolve(rows);
      });
  });
  
  }






export {
    getCar,
    getCarAddPage
}

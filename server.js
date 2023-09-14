
/*
const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./db');
*/

import express from 'express';
import exphbs from 'express-handlebars';
//import db from './db.js';

import {db} from './db.js';

const app = express();


app.engine('handlebars', exphbs.engine({ 
    defaultLayout:'main', 
    helpers: {
        section: function(name, options){
            if(!this._sections) {
                this._sections = {}
            };
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');


app.use(express.static('public'))

// Routing 
app.get('/', (req,res) => {
    res.render("index", { cars: db.cars });
});
app.get('/about', (req,res) => {
    res.render("about");
});

app.get('/contact', (req,res) => {
    res.render("contact");
});

app.get('/login', (req,res) => {
    res.render("login");
});

app.get('/sign', (req,res) => {
    res.render("sign");
});



app.get('/cars/:id', (req,res) => {
    const carId = req.params.id;
    const car = db.cars.find((car)=>car.id == carId);
    if (car) {
        res.render("carDetail", car);
    } else {
        res.render("404");
    }
    
});






app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
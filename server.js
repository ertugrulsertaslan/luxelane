
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
//const { engine } = require('express-handlebars');


//app.engine('handlebars', engine());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



// Routing 
app.get('/', (req,res) => {
    res.render("index", { layout: false });
});
app.get('/about', (req,res) => {
    res.render("about.", { layout: false });
});

app.get('/contact', (req,res) => {
    res.render("contact", { layout: false });
});

app.get('/login', (req,res) => {
    res.render("login", { layout: false });
});

app.get('/sign', (req,res) => {
    res.render("sign", { layout: false });
});




app.get('/cars/ferrari', (req,res) => {
    res.render("cars/ferrari", { layout: false });
});
app.get('/cars/lamborghini', (req,res) => {
    res.render("cars/lamborghini", { layout: false });
});
app.get('/cars/mercedes', (req,res) => {
    res.render("cars/mercedes", { layout: false });
});
app.get('/cars/porsche', (req,res) => {
    res.render("cars/porsche", { layout: false });
});






app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
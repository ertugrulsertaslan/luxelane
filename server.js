
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');


app.engine('handlebars', exphbs.engine({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');


app.use(express.static('public'))

// Routing 
app.get('/', (req,res) => {
    res.render("index");
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




app.get('/cars/ferrari', (req,res) => {
    res.render("cars/ferrari");
});
app.get('/cars/lamborghini', (req,res) => {
    res.render("cars/lamborghini");
});
app.get('/cars/mercedes', (req,res) => {
    res.render("cars/mercedes");
});
app.get('/cars/porsche', (req,res) => {
    res.render("cars/porsche");
});





app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
import express from 'express';
import exphbs from 'express-handlebars';
const app = express();

import { getHomePage } from './controllers/home.controller.js';
import { getAboutPage } from './controllers/about.controller.js';
import { getCarDetailPage } from './controllers/carDetail.controller.js';
import { getContactPage } from './controllers/contact.controller.js';
import { getSignPage } from './controllers/sign.controller.js';
import { getLoginPage } from './controllers/login.controller.js';
import { getcarListPage } from './controllers/carList.controller.js';
import { getCarAddPage } from './controllers/carAdd.controller.js'; 
import { getCar } from './controllers/carAdd.controller.js';



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
app.get('/', getHomePage);
app.get('/about',getAboutPage);
app.get('/contact',getContactPage);
app.get('/login',getLoginPage);
app.get('/sign', getSignPage);
app.get('/cars/:id', getCarDetailPage);
app.get('/carList', getcarListPage);
app.get('/carAdd',getCarAddPage);



app.post('/carAdd',getCar );
    













app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
import express from 'express';
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
const app = express();
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { body } from 'express-validator'
import errorValidation from './middlewares/errorValidation.js';

import controllers from './controllers/index.js';
import roleAuth from './middlewares/roleAuth.js';
import { getHomePage } from './controllers/home.controller.js';
import { getCarDetailPage } from './controllers/carDetail.controller.js';
import { getcarListPage } from './controllers/carList.controller.js';
import { getCarEditPage } from './controllers/carEdit.controller.js';
import { deleteCarHandler } from './controllers/deleteCar.controller.js';
import { CarEdithandler } from './controllers/carEdit.controller.js';
import { upload } from './controllers/cars/carAdd.controller.js';
import renderView from './utils/renderView.js';
import session from 'express-session';

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use(session({
    secret: 'UUIbYreIo4xPsSyreNxXbF5iqZguhZH6',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.engine('handlebars', exphbs.engine({ 
    defaultLayout:'main', 
    helpers: {
        section: function(name, options){
            if(!this._sections) {
                this._sections = {}
            };
            this._sections[name] = options.fn(this);
            return null;
        },
        validationFeedback: function(name, options) {
            const fieldFeedback = options.data?.root?.errors?.find((error) => {
                return name === error.path
            });

            if (fieldFeedback) {
                return new Handlebars.SafeString(`<div class="invalid-feedback">${fieldFeedback.msg}</div>`);
            }
            return '';
        },
        validateInput: function(name, options) {
            const fieldFeedback = options.data?.root?.errors?.find((error) => {
                return name === error.path
            });

            if (fieldFeedback) {
                return `is-invalid`
            }

            return '';
        },
    },
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', getHomePage);
app.get('/about', renderView("about"));
app.get('/contact',renderView("contact"));
app.get('/users/login',renderView("users/login"));
app.get('/users/sign-up',renderView("users/signUp"));
app.get('/cars', getcarListPage);
app.get('/cars/create',renderView("cars/carAdd"));
app.get('/admin-dashboard',renderView("adminDashboard"));
app.get('/cars/update/:id',getCarEditPage);
app.get('/cars/:id', getCarDetailPage);//roleAuth("ADMIN"),




app.post('/cars/create',
    upload.single('uploaded_file'),
    [
        body('brand').isString().withMessage('Brand must be string'),
        body('model').isString(),
        body('hp').isString().isNumeric(),
        body('seats').isString().isNumeric(),
        body('hourlyPrice').isString().isNumeric(),
        body('zeroToHundredKmh').toFloat().isFloat(),
        body('fuel').isIn(['GASOLINE', 'DIESEL', 'HYBRID', 'ELECTRIC']),
        body('transmission').isIn(['MANUAL', 'AUTOMATIC']),
        body('bodyType').isIn(['COUPE', 'CABRIO', 'SEDAN', 'HATCHBACK', 'SUV', 'STATION_WAGON']),
        body('doors').toInt().isInt({ min: 1, max: 7 }),
        body('minDriverAge').toInt().isInt({ min: 18, max: 65 }),
        body('minLicenseAge').toInt().isInt({ min: 0 }),
        body('status').isIn(['ACTIVE', 'MAINTENANCE', 'PRIVATE']),
        //body('uploaded_file').notEmpty()
    ],
    errorValidation('carAdd'),
    controllers.cars.create
);

app.post('/cars/update/:id',
    upload.single('uploaded_file'),
    /*
    [
        body('brand').isString().withMessage('Brand must be string'),
        body('model').isString(),
        body('hp').isString().isNumeric(),
        body('seats').isString().isNumeric(),
        body('hourlyPrice').isString().isNumeric(),
        body('zeroToHundredKmh').toFloat().isFloat(),
        body('fuel').isIn(['GASOLINE', 'DIESEL', 'HYBRID', 'ELECTRIC']),
        body('transmission').isIn(['MANUAL', 'AUTOMATIC']),
        body('bodyType').isIn(['COUPE', 'CABRIO', 'SEDAN', 'HATCHBACK', 'SUV', 'STATION_WAGON']),
        body('doors').toInt().isInt({ min: 1, max: 7 }),
        body('minDriverAge').toInt().isInt({ min: 18, max: 65 }),
        body('minLicenseAge').toInt().isInt({ min: 0 }),
        body('status').isIn(['ACTIVE', 'MAINTENANCE', 'PRIVATE']),
       // body('uploaded_file').notEmpty()
    ],
    errorValidation('/carList'),
    */
    CarEdithandler
);

app.post('/cars/delete/:id', deleteCarHandler);

app.post('/users/login', controllers.users.login); 
app.post('/users/sign-up',upload.single('uploaded_file'), controllers.customers.signUp);

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
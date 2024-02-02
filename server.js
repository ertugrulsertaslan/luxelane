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
import { upload } from './controllers/cars/carAdd.controller.js';
import renderView from './utils/renderView.js';
import session from 'express-session';
import models from './models/index.js';

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
app.get('/', controllers.cars.getAllCarsHome);
app.get('/about', renderView("about"));
app.get('/contact',renderView("contact"));
app.get('/users/login',renderView("users/login"));
app.get('/users/sign-up',renderView("users/signUp"));
app.get('/cars', controllers.cars.getViewCars);
app.get('/admin-cars',controllers.cars.getAllCars); // roleAuth("ADMIN"),
app.get('/cars/brand', renderView("cars/carBrandadd"));
app.get('/cars/create',controllers.cars.getBrand);
app.get('/admin-dashboard',renderView("adminDashboard"));
app.get('/cars/update/:id',controllers.cars.getByIdEdit);
app.get('/cars/:id', controllers.cars.getByIdDetail);

app.post('/cars/brand',upload.single('uploaded_file'),controllers.cars.createBrand)

app.post('/cars/create',
    upload.single('uploaded_file'),
    [
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
    errorValidation('cars/carAdd'),
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
    controllers.cars.update
);

app.get('/cars/delete/:id', controllers.cars.delete);

app.post('/users/login',
    [
        body('email').isString().isEmail().withMessage('Brand must be email format'),
        body('password').isString()
    ],
    errorValidation('users/login'),
    controllers.users.login
); 
app.post('/users/sign-up',
    upload.single('uploaded_file'),  
    [
        body('email').isString().isEmail().withMessage('Brand must be email format')
    ],
    errorValidation('users/signUp'),
    controllers.customers.signUp);

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
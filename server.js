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


import { getHomePage } from './controllers/home.controller.js';
import { getAboutPage } from './controllers/about.controller.js';
import { getCarDetailPage } from './controllers/carDetail.controller.js';
import { getContactPage } from './controllers/contact.controller.js';
import { getSignPage } from './controllers/sign.controller.js';
import { getLoginPage } from './controllers/login.controller.js';
import { getcarListPage } from './controllers/carList.controller.js';
import { getAdminPage } from './controllers/admin.Dashboard.controller.js';
import { CarDataPost, getCarAddPage } from './controllers/carAdd.controller.js';
import { getCarEditPage } from './controllers/carEdit.controller.js';
import { deleteCarHandler } from './controllers/deleteCar.controller.js';
import { CarEdithandler } from './controllers/carEdit.controller.js';
import { upload } from './controllers/carAdd.controller.js';

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
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

// Routing 
app.get('/', getHomePage);
app.get('/about',getAboutPage);
app.get('/contact',getContactPage);
app.get('/login',getLoginPage);
app.get('/sign', getSignPage);
app.get('/cars/:id', getCarDetailPage);
app.get('/car-list', getcarListPage);
app.get('/car-add',getCarAddPage);
app.get('/admin-dashboard',getAdminPage);
app.get ('/car-edit/:id',getCarEditPage);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.post('/car-add',
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
        body('uploaded_file').notEmpty()
    ],
    errorValidation('carAdd'),
    CarDataPost
);
app.post('/car-edit/:id',upload.single('uploaded_file'),CarEdithandler);
app.post('/car-list/:id', deleteCarHandler);

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
// Customer models
import createCustomerModel from './customers/createCustomer.model.js';

// User models
import getUserByEmailModel from './users/getUserByEmail.js';
import getUserByPasswordModel from './users/getUserByPassword.js';
import passwordEncryptionModel from './users/passwordEncryption.js';
import passwordCompareModel from './users/passwordCompare.js';

// Car models
import createCarModel from './cars/createCar.model.js';
import updateCarModel from './cars/updateCar.model.js';
import getCarByIdModel from './cars/getCarById.model.js';
import deleteCarModel from './cars/deleteCar.model.js';
import getAllCarsModel from './cars/getAllCars.model.js';
// ..

export default {
    customers: {
        create: createCustomerModel,
    },
    users: {
        getByEmail: getUserByEmailModel,
        getByPassword: getUserByPasswordModel,
        passwordEncryption:passwordEncryptionModel,
        passwordCompare:passwordCompareModel,
    },
    cars: {
        create: createCarModel,
        update: updateCarModel,
        getById: getCarByIdModel,
        delete : deleteCarModel,
        getAllCars : getAllCarsModel,
    },
}
// Customer models
import createCustomerModel from './customers/createCustomer.model.js';

// User models
import getUserByEmailModel from './users/getUserByEmail.js';
// Car models
import createCarModel from './cars/createCar.model.js';
// ..

export default {
    customers: {
        create: createCustomerModel,
    },
    users: {
        getByEmail: getUserByEmailModel,
    },
    cars: {
        create: createCarModel,
        // create: createCarModel,
        // update: updateCarModel,
    },
}
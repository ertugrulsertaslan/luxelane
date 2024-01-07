// Customer models
import createCustomerModel from './customers/createCustomer.model.js';

// User models
import getUserByEmailModel from './users/getUserByEmail.js';
// Car models
// ..

export default {
    customers: {
        create: createCustomerModel,
    },
    users: {
        getByEmail: getUserByEmailModel,
    },
    cars: {
        // create: createCarModel,
        // update: updateCarModel,
    },
    users: {
        //
    }
}
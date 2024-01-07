// Customer models
import createCustomerModel from './customers/createCustomer.model.js';

// Car models
// ..

export default {
    customers: {
        create: createCustomerModel,
    },
    cars: {
        // create: createCarModel,
        // update: updateCarModel,
    },
    users: {
        //
    }
}
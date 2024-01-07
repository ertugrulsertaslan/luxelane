// import controllers
import signUpCustomerController from './customers/signUp.controller.js';

// import users controllers
import userLoginController from './users/login.controller.js';


// export controllers
export default {
    customers: {
        signUp: signUpCustomerController,
    },
    users: {
        login: userLoginController,
    }
}
// import controllers
import signUpCustomerController from './customers/signUp.controller.js';

// import users controllers
import userLoginController from './users/login.controller.js';

import carAddController from './cars/carAdd.controller.js';
import carDetailContoller from './cars/carDetail.controller.js';
import carEditController from './cars/carEdit.controller.js';
import carDeleteController from './cars/deleteCar.controller.js';
import carListController from './cars/carList.controller.js';
import getCarEditcontroller from './cars/getCarEditcontroller.js';
import getHomeController from './home.controller.js';

// export controllers
export default {
    customers: {
        signUp: signUpCustomerController,
    },
    users: {
        login: userLoginController,
    },
    cars: {
        create: carAddController,
        update : carEditController,
        getByIdDetail: carDetailContoller,
        delete : carDeleteController,
        getAllCars :carListController,
        getByIdEdit: getCarEditcontroller,
        getAllCarsHome:getHomeController,
    }
}
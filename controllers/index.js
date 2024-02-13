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
import getAdminCarlistcontroller from './cars/adminCarlist.controller.js';
import carBrandAddController from './cars/carBrandadd.controller.js';
import getCaraddController from './cars/getCaradd.controller.js';
import filterCarController from './cars/filterCar.controller.js';
import dateSessionController from './cars/dateSession.controller.js';

import branchAddController from './branch/branchAdd.controller.js';
import branchListController from './branch/branchList.controller.js';
import deleteBranchController from './branch/deleteBranch.controller.js';
import getBranchEditController from './branch/getBranchEdit.controller.js';
import branchEditControler from './branch/branchEdit.controler.js';
import branchDetailController from './branch/branchDetail.controller.js';
import adminCarlistController from './cars/adminCarlist.controller.js';

import orderController from './order.controller.js';

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
        getAllCars : getAdminCarlistcontroller,
        getViewCarsFilterBranch :carListController,
        getByIdEdit: getCarEditcontroller,
        getAllCarsHome:getHomeController,
        createBrand : carBrandAddController,
        getBrand : getCaraddController,
        getCarAndBrandById : carDetailContoller,
        filterCar : filterCarController,
        getCarType : carAddController,
        getAllCarType : getHomeController,
        getAllCarType : carListController,
        getAllCarType : filterCarController,
        getAllCarType : adminCarlistController,
    },
    branch: {
        create: branchAddController,
        getBranch : getCaraddController,
        getAllBranch : branchListController,
        delete : deleteBranchController,
        getByIdEdit : getBranchEditController,
        update : branchEditControler,
        getByIdDetail : branchDetailController,
    },
    session: {
        session: dateSessionController,
    },
    order: {
        getOrder: orderController,
    }
}
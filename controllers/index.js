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

import branchAddController from './branch/branchAdd.controller.js';
import branchListController from './branch/branchList.controller.js';
import deleteBranchController from './branch/deleteBranch.controller.js';
import getBranchEditController from './branch/getBranchEdit.controller.js';
import branchEditControler from './branch/branchEdit.controler.js';
import branchDetailController from './branch/branchDetail.controller.js';
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
        getViewCars :carListController,
        getByIdEdit: getCarEditcontroller,
        getAllCarsHome:getHomeController,
        createBrand : carBrandAddController,
        getBrand : getCaraddController,
        getCarAndBrandById : carDetailContoller,
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
}
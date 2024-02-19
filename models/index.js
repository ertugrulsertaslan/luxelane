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
import getCarTypeModel from './cars/getCarType.model.js';
import filterCarModel from './cars/filterCar.model.js';
import getAllCarsFilterBranchModel from './cars/getAllCarsFilterBranch.model.js';


//Brand models
import getBrandByIdModel from './brand/getBrandById.model.js';
import getCarAndBrandByIdModel from './cars/getCarAndBrandById.model.js';
import createBrandModel from './cars/createBrand.model.js'
import getAllBrandModel from './cars/getAllBrand.model.js';
//Order models

import createOrderModel from './order/createOrder.model.js';
import getOrderModel from './order/getOrder.model.js';

// ..
// Branch models
import createBranchModel from './branch/createBranch.model.js';
import getAllBranchModel from './branch/getAllBranch.model.js';
import deleteBranchModel from './branch/deleteBranch.model.js';
import updateBranchModel from './branch/updateBranch.model.js';
import getBranchByIdModel from './branch/getBranchById.model.js';

import tempTableModel from './tempData/tempTable.model.js';
import createTempTableModel from './tempData/createTempTable.model.js';
import getTempTableModel from './tempData/getTempTable.model.js';


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
        getViewCars: getAllCarsModel,
        createBrand : createBrandModel,
        getBrand : getAllBrandModel,
        getCarAndBrandById : getCarAndBrandByIdModel,
        filterCar : filterCarModel,
        getCarType : getCarTypeModel,
        getViewCarsFilterBranch : getAllCarsFilterBranchModel,
    },
    branch: {
        create: createBranchModel,
        update: updateBranchModel,
        getBranch: getAllBranchModel,
        delete : deleteBranchModel,
        getById : getBranchByIdModel,
    },
    order: {
        getOrder : getCarAndBrandByIdModel,
        create: createOrderModel,
        getBranch : getBranchByIdModel,
        getOrderProfilePage: getOrderModel,
    },
    brand: {
        getBrandById : getBrandByIdModel,
    },
    tempmemory : {
        create : tempTableModel,
        insert : createTempTableModel,
        getByMemory : getTempTableModel,
    },
}
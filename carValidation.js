import validator from 'express-validator';
const { check, validationResult } = validator;

const carValidation = [
    check('brand','This brand must me 3+ characters long')
    .isLength({ min:3 })
]

export {
    carValidation
}
import { body } from "express-validator"


const registerValidation = [
    body("email", "Неверный формат почты!").isEmail(),
    body("password", "Пароль должен быть минимум 5 символов").isLength({min: 5}),
    body("fullName", "").isLength({min: 3}),
    body("avatar", "").optional().isURL(),
]


export default registerValidation;
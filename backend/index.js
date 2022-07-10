import express from "express"
import { validationResult } from "express-validator"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import registerValidation from "./src/validation/auth.js"

mongoose
.connect('mongodb+srv://admin:wwwwww@stickerapp.ux5so.mongodb.net/?retryWrites=true&w=majority')
.then((data) => console.log(data, "DB OK"))
.catch(() => console.log("DB error!!"))

const app = express()

app.get("/", (req,res) => {
    res.send("HEl2222lo")
})
//  СОхранить заголовки
// app.get("/hello", (req,res) => {
    
//     res.set("Access-Control-Allow-Origin", "*")
//     res.set("Access-Control-Allow-Headers", "x-requested-with")
//     res.set('Access-Control-Allow-Methods', ' PUT, DELETE, OPTIONS')
//     res.status(200).json({
//         hello: "hello",
//     })
// })

app.use(express.json())

app.post("/auth/register", registerValidation,(req, res) => {

    const errors = validationResult(req)

    console.log(errors)

    if(!errors.isEmpty()){
        res.status(400).json(errors.array())
    }

    res.json({
        success: true
    })
})

app.listen("4444", (err) => {
    if (err){
        return console.log(err)
    }
    console.log("Ok")
})


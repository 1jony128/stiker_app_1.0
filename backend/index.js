import express from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

mongoose
.connect('mongodb+srv://admin:wwwww@stickerapp.ux5so.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch(() => console.log("DB error!!"))

const app = express()

app.get("/", (req,res) => {
    res.send("HEl2222lo")
})

app.use(express.json())

app.post("/login", (req, res) => {

    const token = jwt.sign({
        email: req.body.email,
        fullName: "Евгений"
    },
    "daasdas12213"
    )

    console.log(req.body)
    res.json({
        success: true,
        token
    })
})

app.listen("4444", (err) => {
    if (err){
        return console.log(err)
    }
    console.log("Ok")
})
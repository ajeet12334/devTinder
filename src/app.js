const express = require("express")

const app = express()

app.use("/test",(req, res) => {
    res.send("Namaste from the test path")
})

app.use("/hello",(req, res) => {
    res.send("Namaste from the hello path")
})

app.use("/",(req, res) => {
    res.send("Namaste from the default path")
})

app.listen(7777, () => {
    console.log("Server started")
})
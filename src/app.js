const express = require("express")

const app = express()

app.get("/user/:userId/:userName",(req, res) => {
    //console.log("Request query",req.query)
    console.log("Request params",req.params)
    res.send({"name": "Ajeet", "area": "jodhpur"})
})

app.post("/user", (req, res)=> {
    //data will come in req and same to db
    res.send("Data saved successfully")
})

app.delete("/user", (req, res)=> {
    res.send("Data deleted successfully")
})

app.use("/test",(req, res) => {
    res.send("Namaste from the test path")
})

app.listen(7777, () => {
    console.log("Server started")
})
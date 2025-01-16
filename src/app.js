const express = require("express");
const mongoose = require("mongoose");
const { dbConnect } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    
//   const userData = {
//     firstName: "Ajeet",
//     lastName: "Bhati",
//     age: 30,
//     gender: "Male",
//     mailId: "ajeet@gmail.com",
//     password: "Ajeet@090",
//   };
  try {
    const userData = req.body
    const user = new User(userData);
    const data = await user.save();
    // data().then(() => {
    //     res.send("Data saved in DB successfully")
    // }).catch((e) => {
    //     res.send("Data not saved in DB successfully", e)
    // })
    res.send("User Data saved successfully");
  } catch (e) {
    res.status(400).send("Error while saving user data", e.message);
  }
});

dbConnect()
  .then(() => {
    console.log("database connected successfully");
    app.listen(7777, () => {
      console.log("Server listining started");
    });
  })
  .catch((e) => {
    console.log("database conection error", e);
  });

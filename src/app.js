const express = require("express");
const { adminAuth, userAuth } = require("./middleware/adminAuth")

const app = express();

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User login");
})
app.get("/user", userAuth, (req, res) => {
    res.send("get data from user request handler!");
});

app.get("/admin/getAllUser", (req, res) => {
  res.send("Data fetched successfully!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted!");
});

app.listen(7777, () => {
  console.log("Server started");
});

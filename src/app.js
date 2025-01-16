const express = require("express");
const { adminAuth } = require("./middleware/adminAuth")

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAllUser", (req, res) => {
  res.send("Data fetched successfully!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted!");
});

app.listen(7777, () => {
  console.log("Server started");
});

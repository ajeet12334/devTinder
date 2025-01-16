const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
  console.log("Checking autherization");
  const token = "qwerty";
  const isAutherised = token === "qwerty";
  if (!isAutherised) {
    res.send("user is not autherized!");
  } else {
    next();
  }
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

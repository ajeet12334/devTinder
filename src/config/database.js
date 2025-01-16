const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://bhatiajeet017:L2ujyZOKZjLcABB1@myfirstdatabasecluster.x4ude.mongodb.net/devTinder"
  );
};

module.exports = { dbConnect }

// dbConnect
//   .then(() => {
//     console.log("database connected successfully");
//   })
//   .catch((e) => {
//     console.log("database conection error", e);
//   });

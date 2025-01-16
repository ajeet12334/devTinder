const adminAuth = (req, res, next) => {
  console.log("Checking autherization in middleware folder");
  const token = "qwerty";
  const isAutherised = token === "qwerty";
  if (!isAutherised) {
    res.send("user is not autherized!");
  } else {
    next();
  }
};

module.exports = { adminAuth };

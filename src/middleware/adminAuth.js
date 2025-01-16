const adminAuth = (req, res, next) => {
  console.log("Admin : Checking autherization in middleware folder");
  const token = "qwerty";
  const isAutherised = token === "qwerty";
  if (!isAutherised) {
    res.status(401).send("admin is not autherized!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
    console.log("User : Checking autherization in middleware folder");
    const token = "qwerty";
    const isAutherised = token === "qwerty";
    if (!isAutherised) {
      res.status(401).send("user is not autherized!");
    } else {
      next();
    }
  };

module.exports = { adminAuth, userAuth };

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      res.status(401).json({
        message: "Unauthorized",
      });
    }

    token = token.split(" ")[1];

    const decoded = jwt.verify(token, "secret-key");

    const user = User.findById(decoded._id);

    if (!user) {
      res.status(401).json({
        message: "Unauthorized",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Invalid token",
    });
  }
};

module.exports = authenticate;

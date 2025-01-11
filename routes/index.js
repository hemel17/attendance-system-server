const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const authRoutes = require("./auth");
const userRoutes = require("./user");

// * auth routes
router.use("/api/v1/auth", authRoutes);

// * user routes (private)
router.use("/api/v1/user", authenticate, userRoutes);

module.exports = router;

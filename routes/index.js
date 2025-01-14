const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const adminAttendanceRoutes = require("./admin-attendance");
const studentAttendanceRoutes = require("./student-attendance");

// * auth routes
router.use("/api/v1/auth", authRoutes);

// * user routes (private)
router.use("/api/v1/user", authenticate, userRoutes);

// * admin attendance routes (private)
router.use("/api/v1/admin", authenticate, adminAttendanceRoutes);

// * student attendance routes (private)
router.use("api/v1/student", authenticate, studentAttendanceRoutes);

module.exports = router;

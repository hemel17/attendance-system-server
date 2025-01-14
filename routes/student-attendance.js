const router = require("express").Router();
const studentAttendanceController = require("../controllers/student-attendance");

router.get("/attendance", studentAttendanceController.getAttendance);
router.get("/status", studentAttendanceController.getAttendanceStatus);

module.exports = router;

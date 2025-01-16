const adminAttendanceService = require("../services/admin-attendance");
const error = require("../utils/error");

const getEnable = async (_req, res, next) => {
  try {
    const running = await adminAttendanceService.findRunningAttendance();

    if (running) {
      throw error("Already running", 400);
    }

    const attendance = await adminAttendanceService.createNewAttendance();
    res.status(201).json({ message: "New attendance", attendance });
  } catch (error) {
    next(error);
  }
};

const getStatus = async (req, res, next) => {};

const getDisable = async (req, res, next) => {};

module.exports = { getEnable, getStatus, getDisable };

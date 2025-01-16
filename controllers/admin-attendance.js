const adminAttendanceService = require("../services/admin-attendance");
const error = require("../utils/error");

const getEnable = async (_req, res, next) => {
  try {
    const running = await adminAttendanceService.findRunningAttendance(
      "status",
      "RUNNING"
    );

    if (running) {
      throw error("Already running", 400);
    }

    const attendance = await adminAttendanceService.createNewAttendance();
    res.status(201).json({ message: "New attendance", attendance });
  } catch (error) {
    next(error);
  }
};

const getStatus = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getDisable = async (_req, res, next) => {
  try {
    const runningAttendance =
      await adminAttendanceService.findRunningAttendance("status", "RUNNING");

    if (!runningAttendance) {
      throw error("No attendance running", 400);
    }

    runningAttendance.status = "COMPLETED";
    await runningAttendance.save();

    res.status(200).json(runningAttendance);
  } catch (error) {
    next(error);
  }
};

module.exports = { getEnable, getStatus, getDisable };

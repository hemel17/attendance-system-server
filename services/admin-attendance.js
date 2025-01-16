const AdminAttendance = require("../models/AdminAttendance");

const createNewAttendance = () => {
  const newAttendance = new AdminAttendance();
  return newAttendance.save();
};

const findRunningAttendance = (key, value) => {
  return AdminAttendance.findOne({ [key]: value });
};

module.exports = { createNewAttendance, findRunningAttendance };

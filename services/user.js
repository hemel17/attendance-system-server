const User = require("../models/User");

// * get single user
const findUserByProperty = (key, value) => {
  if (key === "_id") {
    return User.findById(value);
  }

  return User.findOne({ [key]: value });
};

// * get all users
const findUsers = () => {
  return User.find();
};

const createNewUser = (name, email, password) => {
  const user = new User({ name, email, password });
  return user.save();
};

module.exports = { findUserByProperty, findUsers, createNewUser };

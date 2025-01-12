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

// * post a new user
const createNewUser = (
  name,
  email,
  password,
  roles = ["STUDENT"],
  accountStatus = "PENDING"
) => {
  const user = new User({ name, email, password, roles, accountStatus });
  return user.save();
};

// * delete single user
const deleteById = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = { findUserByProperty, findUsers, createNewUser, deleteById };

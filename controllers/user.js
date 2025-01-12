const userService = require("../services/user");
const error = require("../utils/error");

// * get single user
const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 400);
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// * get all users
const getUsers = async (req, res, next) => {
  try {
    const users = userService.findUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// * create a new user by admin
const postUser = async (req, res, next) => {};

// * update user
const patchUser = async (req, res, next) => {};
const putUser = async (req, res, next) => {};

// * delete user
const deleteUser = async (req, res, next) => {};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};

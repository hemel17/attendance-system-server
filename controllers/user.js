const userService = require("../services/user");
const error = require("../utils/error");
const hashPassword = require("../utils/hashPassword");

// * get single user
const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
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
const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.findUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// * create a new user by admin
const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;

  const isEmailRegistered = await userService.findUserByProperty(
    "email",
    email
  );

  if (isEmailRegistered) {
    return res.status(400).json({
      message: "This email is already in use",
    });
  }
  const hash = await hashPassword(password);

  try {
    const user = await userService.createNewUser(
      name,
      email,
      hash,
      roles,
      accountStatus
    );

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// * update user
const patchUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, roles, accountStatus } = req.body;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 404);
    }

    user.name = name ?? user.name;
    user.roles = roles ?? user.roles;
    user.accountStatus = accountStatus ?? user.accountStatus;

    await user.save();

    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// * delete user
const deleteUserById = async (req, res, next) => {};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  patchUserById,
  deleteUserById,
};

const error = require("../utils/error");
const { findUserByProperty, createNewUser } = require("./user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerService = async ({ name, email, password }) => {
  const user = await findUserByProperty("email", email);

  if (user) {
    throw error("User already exists", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return createNewUser(name, email, hash);
};

const loginService = async ({ email, password }) => {
  const user = await findUserByProperty("email", email);

  if (!user) {
    throw error("Invalid credential", 400);
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw error("Invalid credential", 400);
  }

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    accountStatus: user.accountStatus,
  };

  return jwt.sign(payload, "secret-key", { expiresIn: "2h" });
};

module.exports = { registerService, loginService };

const router = require("express").Router();
const userController = require("../controllers/user");

// * get single user
router.get("/:userId", userController.getUserById);

// * update user
router.patch("/:userId", userController.patchUserById);

// * delete user
router.delete("/:userId", userController.deleteUserById);

// * get all users
router.get("/", userController.getUsers);

// * create a new user by admin
router.post("/", userController.postUser);

module.exports = router;

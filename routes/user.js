const router = require("express").Router();
const userController = require("../controllers/user");

// * get single user
router.get("/:id", userController.getUserById);

// * update user
router.patch("/:id", userController.patchUser);

router.put("/:id", userController.putUser);

// * delete user
router.delete("/:id", userController.deleteUser);

// * get all users
router.get("/", userController.getUsers);

// * create a new user by admin
router.post("/", userController.postUser);

module.exports = router;

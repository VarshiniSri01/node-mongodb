const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/user", userController.createUser);
router.get("/users",userController.createUser);
router.get("/user/:id",userController.getUserById);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
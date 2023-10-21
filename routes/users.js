const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getAllDataUsers);
router.get("/:id", userController.getDataUserById);
router.post("/", userController.addDataUser);
router.put("/:id", userController.updateDataUser);
router.delete("/:id", userController.deleteDataUser);

module.exports = router;

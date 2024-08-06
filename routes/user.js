const express = require("express");
const router = express.Router();
// const userControllers = require('../controllers/user')
const {
  afficherUser,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
} = require("../controllers/user");

router.post("/user", createUser);
router.get("/user", afficherUser);
router.get("/user/:idUser", getOneUser);
router.put("/user/:idUser", updateUser);
router.delete("/user/:idUser", deleteUser);

module.exports = router;

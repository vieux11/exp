const express = require("express");
const router = express.Router();
// const userControllers = require('../controllers/user')
const {
  afficherUser,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  creeUser,
} = require("../controllers/user");
router.post("/user", creeUser);
router.get("/user", afficherUser);
router.get("/user/:idUser", getOneUser);
router.put("/user/:idUser", updateUser);
router.delete("/user/:idUser", deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  //createUser,
  loginUser,
  //userData,
  //updateUser,
  //deleteUser,
} = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");

// Endpoints Publicos
//router.post("/", createUser);
router.post("/login", loginUser);

//Endpoints Privados
//router.get("/data", protect, userData);
//router.put("/:id", protect, updateUser);
//router.delete('/:id', protect, deleteUser)

module.exports = router;

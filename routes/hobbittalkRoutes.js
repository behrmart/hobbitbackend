// Hobbittalk Endpoints

const express = require("express");
const router = express.Router();
const {
  getTalk,
  setTalk,
  //talkAdmin,
  //messageTalk,
} = require("../controllers/hobbittalkController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getTalk);
router.post("/", protect, setTalk);

//router.get("/admin", protect, talkAdmin);
//router.get("/:id", protect, messageTalk);

module.exports = router;

const express = require("express");
const {
  createUser,
  // storeChatHistory,
  // fetchChatHistory,
  fetchAll,
  fetchAllUser,
  getAll,
} = require("../controller/userController");
const router = express.Router();

router.post("/createUser", createUser);
// router.post("/store", storeChatHistory);
// router.post("/content", fetchChatHistory);
router.get("/getAll", getAll);

module.exports = router;

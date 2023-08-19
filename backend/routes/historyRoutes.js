const express = require("express");
const {
  fetchChatHistory,
  storeChatHistory,
  storeContent,
  storehistory
} = require("../controller/historyController");
const router = express.Router();

// router.post("/store", storeChatHistory);
// router.post("/content", fetchChatHistory);
router.post("/store",storehistory);
router.post("/content",storeContent);

module.exports = router;

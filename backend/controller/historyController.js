const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function fetchChatHistory(userId) {
  try {
    const chatHistory = await prisma.chatHistory.findMany({
      where: { userId },
    });

    return chatHistory;
  } catch (error) {
    throw new Error("Error fetching chat history: " + error.message);
  }
}

async function storeContent(req, res) {
  try {
    const { userId } = req.body;
    fetchChatHistory(userId)
      .then((chatHistory) => {
        console.log("Chat history retrieved:", chatHistory);
        res.status(200).json({ chatHistory });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error fetching chat history." });
      });
  } catch (error) {
    console.error("Error in /content endpoint:", error.message);
    res.status(500).send("Internal Server Error");
  }
}

async function storeChatHistory(userId, description, chatHistory) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const newChatHistory = await prisma.chatHistory.create({
      data: {
        userId: user.id,
        description,
        chatHistory,
      },
    });

    return newChatHistory;
  } catch (error) {
    throw new Error("Error storing chat history: " + error.message);
  }
}

async function storehistory(req, res) {
  try {
    const { userId, description, chatHistory } = req.body;

    if (!userId || !description || !chatHistory) {
      return res
        .status(400)
        .json({ error: "userId, description and chatHistory are required." });
    }

    storeChatHistory(userId, description, chatHistory)
      .then((newChatHistory) => {
        res.status(200).json({ message: "Chat history stored successfully." });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error storing chat history." });
      });
  } catch (error) {
    console.error("Error in /store endpoint:", error.message);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  fetchChatHistory,
  storeChatHistory,
  storeContent,
  storehistory
};

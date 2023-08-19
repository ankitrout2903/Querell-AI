// const { createUser, storeChatHistory, fetchChatHistory, fetchAll } = require('./db');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createNewUser(userName) {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: userName,
        },
      });
  
      return newUser.id;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  async function createUser (req, res) {
    try {
      const { userName } = req.body;
      if (!userName) {
        return res.status(400).json({ error: "Username is required." });
      }
      const result = await createNewUser(userName);
  
      if (!result) {
        return res.status(400).json({ error: "Username already exists." });
      }
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error in /createUser endpoint:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }

//-----------------------------user-------------------------------------------------//
  
  async function fetchAllUser() {
    try {
      const chatHistory = await prisma.chatHistory.findMany({
        select: {
          userId: true,
          createdAt: true
        },
      });
  
      return chatHistory.map((item) => item.userId);
    } catch (error) {
      throw new Error("Error fetching user IDs: " + error.message);
    }
  }
  
  async function fetchAll() {
    try {
      const chatHistory = await prisma.chatHistory.findMany({
        select: {
          userId: true,
          createdAt: true,
        },
      });
  
      const userIds = chatHistory.map((item) => item.userId);
      const users = await prisma.user.findMany({
        where: {
          id: {
            in: userIds,
          },
        },
        select: {
          id: true,
          name: true,
        },
      });
  
      return chatHistory.map((item) => {
        const user = users.find((user) => user.id === item.userId);
        return {
          userId: user.id,
          username: user.name,
          createdAt: item.createdAt,
        };
      });
    } catch (error) {
      throw new Error("Error fetching data: " + error.message);
    }
  }

  async function getAll(req, res) {
    try {
      fetchAll()
        .then((chatHistory) => {
          console.log("Chat history retrieved:", chatHistory);
          res.status(200).json({ chatHistory });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: "Error fetching chat history." });
        });
    } catch (error) {
      console.error("Error in /all endpoint:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }

module.exports = {
  createUser,
  fetchAll,
  fetchAllUser,
  getAll
};

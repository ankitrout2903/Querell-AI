const express = require("express");
const app = express();
const multer = require("multer"); // To handle file uploads
const pdfReader = require("./pdf"); // Import the PDF reading function
const {
  storeChatHistory,
  fetchChatHistory,
  createUser,
  fetchAll,
} = require("./db");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const dotenv = require("dotenv");
const pdfRoutes = require("./routes/pdfRoutes");
const chatRoutes = require("./routes/chatRoutes");
const userRoutes = require("./routes/userRoutes");
const historyRoutes = require("./routes/historyRoutes");

dotenv.config();

let openai = null;
let pdfContent = "";
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const upload = multer();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pdf", pdfRoutes);
app.use("/chat", chatRoutes);
app.use("/user", userRoutes);
app.use("/history", historyRoutes);

app.listen(port, () => console.log("Server running on port 8080"));

app.post("/get-api-key", (req, res) => {
  try {
    const { apiKey } = req.body;

    if (!apiKey) {
      return res.status(400).json({ error: "API key is required." });
    }

    // Create a new instance of OpenAIApi with the provided API key
    const configuration = new Configuration({
      apiKey: apiKey,
    });

    // Update the existing openai instance with the new configuration
    openai = new OpenAIApi(configuration);

    res.status(200).json({ message: "API key received successfully." });
  } catch (error) {
    console.error("Error in /get-api-key endpoint:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

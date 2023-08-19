import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserId } from "./context/userId";
import "./ChatHistory.css"; // Import your CSS file


function ChatHistoryPage() {
  const [chatHistory, setChatHistory] = useState([]);

  const navi = useNavigate();
  const { setSelectedUserId } = useUserId();
  const handleClick = (userId) => {
    setSelectedUserId(userId);
    navi("/chat");
  };

  useEffect(() => {
    // Fetch chat history from API and set it to the state
    const fetchData = async () => {
      try {
        const fetchMsg = async () => {
          try {
            const response = await fetch("https://dbfix-dgj4adfq5q-ue.a.run.app/getAll");
            // localhost:8080/user/getAll


            if (!response.ok) {
              throw new Error("Failed to create user");
            }

            return response.json();
          } catch (error) {
            throw new Error("Error creating user: " + error.message);
          }
        };

        const existingMessages = await fetchMsg();
        setChatHistory(existingMessages.chatHistory);
        console.log("hello");
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchData();
  }, []);

  const cardStyles = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    transition: "background-color 0.2s ease-in-out",
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="title">Chat History</h2>
        {chatHistory.map((entry, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleClick(entry.userId)}
          >
            <p>
              <strong> Username: </strong> {entry.username}
            </p>
            <p>
              <strong>Created At: </strong>
              {new Date(entry.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatHistoryPage;

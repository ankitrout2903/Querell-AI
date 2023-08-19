import React, { useState, useRef, useEffect } from "react";

import "./App.css";
import Chat from "./ChatFile";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi ${name}, start by giving a brief introduction about yourself.`,
    },
  ]);

  return <Chat messages={messages} setMessages={setMessages} />;
}

export default App;

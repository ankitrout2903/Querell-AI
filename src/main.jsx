import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Intro from "./Intro";
import PDFUpload from "./PDFUpload";
import { Toaster } from "react-hot-toast";
import ChatHistoryPage from "./ChatHistory";
import  Chat  from "./ChatFile";
import { UserIdProvider } from "./context/userId";

ReactDOM.render(
  <>
    <Toaster />
    <BrowserRouter>
      <UserIdProvider>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/chat" element={<App />} />
          <Route path="/chat/:userId" element={<App />} />
          <Route path="/pdf" element={<PDFUpload />} />
          <Route path="/history" element={<ChatHistoryPage />} />
        </Routes>
      </UserIdProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

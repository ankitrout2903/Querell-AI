import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./NameInputComponent.css"; // Import your custom CSS for styling
import { useUserId } from "./context/userId";

function NameInputComponent() {
  const [name, setName] = useState("");
  const [disable, setDisable] = useState(false);
  const history = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const createUser = async (name) => {
    try {
      const response = await fetch("https://dbfix-dgj4adfq5q-ue.a.run.app/createUser", {
        //http://localhost:8080/user/createUser

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: name,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      return response.json();
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  };

  const { setSelectedUserId } = useUserId();
  const redirectToPage = async (path) => {
    setDisable(true);
    if (path === "chat" && name === "") {
      toast.error("Enter your name");
    } else if (name.trim() !== "" && path === "chat") {
      try {
        const newUser = await toast.promise(createUser(name), {
          loading: "Creating user...",
          success: "User created successfully!",
          error: "Failed to create user",
        });
        if (newUser) {
          setDisable(false);

          setSelectedUserId(newUser);
        }
        history(`/${path}?name=${encodeURIComponent(name)}`);
      } catch (error) {
        console.error(error);
      }
    } else if (path === "pdf") {
      history(`/${path}`);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="intro">Welcome to QuerellAI</h1>
        <p className="intro-para">
          Step into the world of QuerellAI, where intelligent conversations and
          interactive experiences await. Embark on an innovative journey that
          blurs the lines between human interaction and artificial intelligence.
          Whether you're here to start a stimulating conversation or delve into
          administration, your adventure begins by simply entering your name.
          Let QuerellAI redefine your digital encounters – your next experience
          is just a name away!
        </p>
        <h2 className="title">Enter Your Name</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <button
          className="button"
          disabled={disable}
          onClick={() => redirectToPage("chat")}
        >
          Start Interview
        </button>
        <button
          className="button"
          disabled={disable}
          onClick={() => redirectToPage("pdf")}
        >
          Go to Admin Page
        </button>
      </div>
    </div>
  );
}

export default NameInputComponent;

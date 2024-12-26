import React, { useState } from "react";
import responsesData from "./Chatboat.json"; // Import the JSON data
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // State to toggle chatbot visibility

  // Function to handle sending messages
  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { sender: "user", text: input };
      setMessages([...messages, newMessage]);

      // Find the appropriate response from the JSON data
      const response = responsesData.responses.find(
        (res) => res.query.toLowerCase() === input.toLowerCase()
      );

      // Simulate chatbot response
      setTimeout(() => {
        const botResponse = {
          sender: "bot",
          text: response
            ? response.response
            : "I'm sorry, I don't have an answer for that.",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);

      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="chatbot-app">
      <button
        className="toggle-chatbot-btn"
        onClick={() => setIsChatbotVisible((prev) => !prev)}
      >
        {isChatbotVisible ? "Close Chat" : "Open Chat"}
      </button>

      {isChatbotVisible && (
        <div className="chatbot-container">
          <div className="chatbox">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your query..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

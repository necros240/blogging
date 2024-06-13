// src/components/Chatbot.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <iframe
        src="https://thefinancebot.streamlit.app"
        title="Finance Bot"
        className="chatbot-iframe"
      ></iframe>
    </div>
  );
};

export default Chatbot;

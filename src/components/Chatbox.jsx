import React, { useState } from 'react';

function Chatbox({ onSendMessage, isTyping }) {
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSendMessage = () => {
    if (message.trim() && !isTyping) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`chatbox-container ${isMinimized ? 'minimized' : ''}`}>
      <button className="minimize-btn" onClick={toggleMinimize}>
        {isMinimized ? '▲' : '▼'}
      </button>

      {!isMinimized && (
        <div className="message-input-wrapper">
          <input
            className="messageInput"
            type="text"
            placeholder={isTyping ? "Swift AI is typing..." : "Send a message to Swift AI"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
          />
          <button type='submit' onClick={handleSendMessage} disabled={isTyping}>
            {isTyping ? '...' : 'Send'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Chatbox;

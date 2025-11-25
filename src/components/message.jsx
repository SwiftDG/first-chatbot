import React from "react";

function ChatMessage(props) {
  const { message, user } = props;
  if (user === "user") {
    return (
      <div className="text-chat user-chat">
        <p className="chatParagraph">{message}</p>
        <img src="/images/user.jpeg" width={50} height={50} style={{ borderRadius: "2rem" }} alt="picture of user" />
      </div>
    )
  } else {
    return (
      <div className="text-chat robot-chat">
        <img src="/images/robot.jpeg" width={50} height={50} style={{ borderRadius: "2rem" }} alt="picture of robot" />
        <p className="chatParagraph">{message}</p>
      </div>
    )
  }
}

export default ChatMessage;
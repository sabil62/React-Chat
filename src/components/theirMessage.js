import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  //to check whether he/she is first message
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {
        //this below is if statement if(isFirstMessageByUser){<div>}
        isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{
              backgroundImage:
                message.sender && `url(${message.sender.avatar})`,
            }}
          ></div>
        )
      }
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "47px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;

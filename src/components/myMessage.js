import React from "react";

const MyMessage = ({ message }) => {
  //checking image(down)
  if (message.attachments && message.attachments.length > 0) {
    //if image
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3399FF",
        marginBottom: "5px",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;

import React from "react";
import MyMessage from "./myMessage";
import TheirMessage from "./theirMessage";
import MessageForm from "./messageForm";

const ChatFeed = (props) => {
  //   //   console.log(props);
  const { chats, activeChat, userName, messages } = props;
  //   //activeChat is a number// and chats[activeChat] is a number
  const chat = chats && chats[activeChat];
  //   //   console.log(chat, userName, messages);
  //renderMessages is like chat bubbles lamo wala blue blue msnger
  const renderMessages = () => {
    //  keys are keys of messages
    const keys = Object.keys(messages);
    // console.log(keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index == 0 ? null : key[index - 1];
      const isMyMessage = userName == message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
            <div
              className="read-receipts"
              style={{
                marginRight: isMyMessage ? "18px" : "0px",
                marginLeft: isMyMessage ? "0px" : "65px",
              }}
            >
              read-receipts
            </div>
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    return "Loading ...";
  }
  return (
    <div>
      <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">{chat?.title}</div>
          <div className="chat-subtitle">
            {chat.people.map((person) => `${person.person.username}`)}
          </div>
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;

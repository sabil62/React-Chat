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
  //to add seen bubble
  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  };
  //renderMessages is like chat bubbles lamo wala blue blue msnger
  const renderMessages = () => {
    //  keys are keys of messages
    const keys = Object.keys(messages);
    // console.log(keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "65px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    return <div />;
  }
  return (
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
  );
};

export default ChatFeed;

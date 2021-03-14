import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/chatFeed";
import LoginForm from "./components/loginForm";
import React from "react";

const App = () => {
  if (!localStorage.getItem("userName")) {
    return <LoginForm />;
  }
  // const localUser, localPassword;
  if (localStorage.getItem("userName")) {
    var localUser = localStorage.getItem("userName");
    var localPassword = localStorage.getItem("password");
  }
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    window.location.reload();
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: "4vh",
          backgroundColor: "#F0F0F0",
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#99ccff",
            color: "#ffff1a",
            padding: "7px",
            marginRight: "2rem",
            border: "none",
          }}
        >
          Logout
        </button>
      </div>
      <ChatEngine
        height="96vh"
        projectID="d426e579-2421-4e68-ba40-e01358bc8db1"
        userName={localUser}
        userSecret={localPassword}
        // userName="bman"
        // userSecret="bman123"
        renderChatFeed={(renderChatProps) => <ChatFeed {...renderChatProps} />}
      />
    </React.Fragment>
  );
};

export default App;

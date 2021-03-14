import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/chatFeed";
import LoginForm from "./components/loginForm";

const App = () => {
  if (!localStorage.getItem("userName")) {
    return <LoginForm />;
  }
  // const localUser, localPassword;
  if (localStorage.getItem("userName")) {
    var localUser = localStorage.getItem("userName");
    var localPassword = localStorage.getItem("password");
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="d426e579-2421-4e68-ba40-e01358bc8db1"
      userName={localUser}
      userSecret={localPassword}
      // userName="bman"
      // userSecret="bman123"
      renderChatFeed={(renderChatProps) => <ChatFeed {...renderChatProps} />}
    />
  );
};

export default App;

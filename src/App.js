import "./App.css";
import { ChatEngine } from "react-chat-engine";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      publicKey="d426e579-2421-4e68-ba40-e01358bc8db1"
      userName="bman"
      userSecret="bman123"
    />
  );
};

export default App;

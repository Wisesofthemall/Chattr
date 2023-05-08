import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="text-rose-600 text-8xl">
      <Button colorScheme="blue">Button</Button>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/chats" component={ChatPage} />
      hello
    </div>
  );
}

export default App;

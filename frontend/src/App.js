import "./App.css";

import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="min-h-[100vh] flex bg-blue-400 bg-cover bg-center">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;

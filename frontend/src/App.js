import { useState } from "react";

import "./App.css";

import AuthPage from "./pages/auth";
import ChatsPage from "./pages/chats";

function App() {
  const [user, setUser] = useState(undefined);
  console.log("user", user);
  if (user) {
    return <ChatsPage user={user} />;
  }

  return <AuthPage onAuth={(user) => setUser(user)} />;
}

export default App;

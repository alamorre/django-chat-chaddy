import "./App.css";

import AuthPage from "./pages/auth";
import ChatsPage from "./pages/chats";

function App() {
  const { pathname } = window.location;

  if (pathname === "/chats") {
    return <ChatsPage />;
  }

  return <AuthPage />;
}

export default App;

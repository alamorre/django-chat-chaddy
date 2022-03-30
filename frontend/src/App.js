import "./App.css";

import AuthPage from "./pages/auth";
import ChatPage from "./pages/chat";

function App() {
  const { pathname } = window.location;

  if (pathname === "/chat") {
    return <ChatPage />;
  }

  return <AuthPage />;
}

export default App;

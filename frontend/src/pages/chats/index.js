import { useContext } from "react";

import { Context } from "../../context";

import Header from "./Header";
import {
  MultiChatWindow,
  useMultiChatLogic,
  MultiChatSocket,
} from "react-chat-engine-advanced";
const projectId = "70049943-b572-4372-9f3c-fbdeca940e0f";

const ChatsPage = () => {
  const { user } = useContext(Context);

  const chatProps = useMultiChatLogic(projectId, user.username, user.secret);

  if (!user) {
    return <div />;
  } else {
    return (
      <div>
        <Header />

        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
          {...chatProps}
          style={{ height: "calc(100vh - 64px)" }}
        />
      </div>
    );
  }
};

export default ChatsPage;

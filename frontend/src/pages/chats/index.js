import {
  MultiChatWindow,
  useMultiChatLogic,
  MultiChatSocket,
} from "react-chat-engine-advanced";

const projectId = "70049943-b572-4372-9f3c-fbdeca940e0f";

const ChatsPage = (props) => {
  console.log("props.user", props.user);

  const chatProps = useMultiChatLogic(
    projectId,
    props.user.username,
    props.user.password
  );

  if (!props.user) return <div />;

  return (
    <div>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default ChatsPage;

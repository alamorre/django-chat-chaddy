import { useContext } from "react";

import { Context } from "../../../context";

import MyAccount from "./MyAccount";

import { Menu, notification } from "antd";
import { CommentOutlined, LogoutOutlined } from "@ant-design/icons";

const UserHeader = () => {
  const { setUser } = useContext(Context);

  const onLogout = () => {
    setUser(undefined);
    notification.success({
      message: "See you later!",
      placement: "bottomLeft",
    });
  };

  return (
    <Menu
      style={{ height: "64px" }}
      theme="dark"
      selectedKeys={"mail"}
      mode="horizontal"
    >
      <Menu.Item
        style={{ lineHeight: "64px" }}
        key="mail"
        icon={<CommentOutlined />}
      >
        My Chats
      </Menu.Item>
      <MyAccount />
      <Menu.Item
        style={{ lineHeight: "64px" }}
        key="logout"
        icon={<LogoutOutlined />}
        onClick={onLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default UserHeader;

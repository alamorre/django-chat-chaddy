import React, { useState, useContext } from "react";

import { Modal, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Context } from "../../../../context";
import { deleteUser } from "./deleteUser";

const MyAccount = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user, setUser } = useContext(Context);

  const showModal = () => {
    setIsVisible(true);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const onDelete = () => {
    deleteUser(
      user,
      () => setUser(undefined),
      (e) => console.log("Delete user error", e)
    );
  };

  return (
    <>
      <Menu.Item
        style={{ lineHeight: "64px" }}
        key="app"
        icon={<UserOutlined />}
        onClick={showModal}
      >
        My Account
      </Menu.Item>

      <Modal
        title="My Account"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Button type="danger" onClick={onDelete}>
          Delete Account
        </Button>
      </Modal>
    </>
  );
};

export default MyAccount;

import { useState } from "react";

import { Col, Row, Form, Input, Button, Checkbox } from "antd";

import { login } from "./login";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = (r) => {
    setIsLoading(false);
    console.log(r.data);
  };

  const onError = (e) => {
    setIsLoading(false);
    console.log(e);
  };

  const onFinish = (values) => {
    setIsLoading(true);
    login(values, onSuccess, onError);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      style={{
        height: "100vh",
        backgroundColor: "#fafafa",
        color: "#262626",
        paddingTop: "25vh",
      }}
    >
      <Col offset={6} xs={12}>
        <h1>Welcome back</h1>

        <h4 style={{ color: "#8c8c8c" }}>
          Welcome back! Please enter your details
        </h4>

        <Form
          name="login"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ paddingTop: "18px" }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 24 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
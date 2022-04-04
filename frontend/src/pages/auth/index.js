import { Col, Row } from "antd";

import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  return (
    <Row>
      <Col md={12} sm={24}>
        <Login />
      </Col>

      <Col md={12} sm={24}>
        <Register />
      </Col>
    </Row>
  );
};

export default AuthPage;

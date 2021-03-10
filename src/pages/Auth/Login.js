import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { Container, Row, Col, Form } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

const Login = ({ location, history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);

  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <Container>
        <Row>
          <Col sm={6}>
            <Form onSubmit={loginHandler}>
              <h2>Sign in</h2>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your email id"
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  alue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" your password"
                />
              </Form.Group>
              <Form.Group controlId="login">
                <PrimaryButton type="submit">Login</PrimaryButton>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;

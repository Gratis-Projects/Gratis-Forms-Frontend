import React, { useState } from "react";
import { PrimaryButton } from "../../components/buttons";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { register } from "../../redux/actions/userActions";
export default function Register({ location, history }) {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
      username,
    };
    dispatch(register(user));
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <Container>
        <Col sm={6}>
          <Form onSubmit={registerHandler}>
            <h2>Sign Up</h2>
            <Form.Group controlId="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your User Name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Id"
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
              <PrimaryButton type="submit">Register</PrimaryButton>
            </Form.Group>
          </Form>
        </Col>
      </Container>
    </>
  );
}

// email, password, username,

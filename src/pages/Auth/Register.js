import React, { useEffect } from "react";
import { PrimaryButton } from "../../components/buttons";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { register } from "../../redux/actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register({ location, history }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string().required("required"),
      username: Yup.string().required("required"),
      // .min(8, "password is too short - should be 8 chars minimum."),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  // const registerHandler = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     email,
  //     password,
  //     username,
  //   };
  //   dispatch(register(user));
  // };

  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <Container>
        <Row>
          <Col sm={6}>
            <Form onSubmit={formik.handleSubmit}>
              <h2>Sign Up</h2>
              <Form.Group controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="input"
                  {...formik.getFieldProps("username")}
                  placeholder="Your User Name"
                />
                {formik.touched.username && formik.errors.username ? (
                  <span style={{ color: "red", fontSize: "80%" }}>
                    {formik.errors.username}
                  </span>
                ) : null}
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="input"
                  {...formik.getFieldProps("email")}
                  placeholder="Your Email Id"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span style={{ color: "red", fontSize: "80%" }}>
                    {formik.errors.email}
                  </span>
                ) : null}
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...formik.getFieldProps("password")}
                  placeholder=" your password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <span style={{ color: "red", fontSize: "80%" }}>
                    {formik.errors.password}
                  </span>
                ) : null}
              </Form.Group>
              <Form.Group controlId="register">
                <PrimaryButton type="submit">Register</PrimaryButton>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// email, password, username,

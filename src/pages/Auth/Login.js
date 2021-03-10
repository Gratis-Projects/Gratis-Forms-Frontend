import React, { useEffect } from "react";
import { PrimaryButton } from "../../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { Container, Row, Col, Form } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ location, history }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string()
        .required("required")
        // .min(8, "password is too short - should be 8 chars minimum."),
    }),
    onSubmit: (values) => {
      dispatch(login(values))
    },
  });
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);
  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <Container>
        <Row>
          <Col sm={6}>
            <Form onSubmit={formik.handleSubmit}>
              <h2>Sign in</h2>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="input"
                  {...formik.getFieldProps("email")}
                  placeholder="your email id"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span  style={{color:"red",fontSize:"80%"}}>
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
                  <span style={{color:"red",fontSize:"80%"}}>{formik.errors.password}</span>
                ) : null}
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

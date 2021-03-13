import React from "react";
import { PrimaryButton } from "../../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../redux/actions/userActions";
import { Container, Row, Col, Form } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

export default function ValidateUser() {
  const dispatch = useDispatch();
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      password: "",
      token: `${params.token}`,
    },
    validationSchema: Yup.object({
      password: Yup.string().required("required"),
      // .min(8, "password is too short - should be 8 chars minimum."),
    }),
    onSubmit: (values) => {
      dispatch(validate(values));
    },
  });

  const userValidate = useSelector((state) => state.userValidate);
  const { loading, error, userInfo } = userValidate;
  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <Container>
        <Row>
          <Col sm={6}>
            <Form onSubmit={formik.handleSubmit}>
              <h2>Verify you email</h2>
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
              <Form.Group controlId="verify">
                <PrimaryButton type="submit">Verify</PrimaryButton>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

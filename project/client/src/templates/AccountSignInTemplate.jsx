import React from "react";
 import { Formik } from 'formik';
import * as yup from 'yup';

import { Button, FloatingLabel, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link, useNavigate  } from "react-router-dom";

import authService from '../services/auth.service';

import './css/AccountSignInTemplate.css';

const schema = yup.object().shape({ // schema for validation of sign in input
  email: yup.string().email('Invalid email').required('Required email'),
  password: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required password'),
});

function AccountSignInTemplate() {
  const navigate = useNavigate();

  return (
    <main className="sign-in-main">
      <div className="sign-in-container-wrap">
        <Container>
          <div className="sign-in">
            <div className="sign-in-window-wrap">
              <div className="sign-in-window">
                <div className="sign-in-icon">
                  <Link to={"/"}>
                    <img alt="Logo" src="/logo192.png" />
                  </Link>
                  <p>Company Name</p>
                </div>
                <div className="sign-in-text-label">
                  <div className="sign-in-label">Sign In</div>
                  <div className="sign-in-text">
                    Hi There! Nice to see you again.
                  </div>
                </div>
                <div className="sign-in-form-wrap">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                      authService.login(values.email, values.password);
                      navigate('/account');
                    }}
                    enableReinitialize
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                      setFieldValue,
                    }) => (
                      <Form
                        className="sign-in-form"
                        name="sign-in-form"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={values.email}
                            onChange={handleChange}
                            required
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingPassword"
                          label="Password"
                        >
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="valid">
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </FloatingLabel>
                        <Button variant="dark" type="submit" size="lg">
                          Sign In
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="forgot-password-signup-wrap">
                  <div className="forgot-password-wrap">
                    <div className="forgot-password">
                      <p>Forgot Password?</p>
                    </div>
                  </div>
                  <div className="sign-up-wrap">
                    <div className="sign-up">
                      <Link to={'/account/signup'}>
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default AccountSignInTemplate;

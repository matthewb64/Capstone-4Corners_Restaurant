import React from "react";
 import { Formik } from 'formik';
import * as yup from 'yup';

import { Button, FloatingLabel, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";

import authService from '../services/auth.service';

import './css/AccountSignUpTemplate.css';

const schema = yup.object().shape({ // validation schema for sign up
  email: yup.string().email('Invalid email').required('Required email'),
  password: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required password'),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

function AccountSignUpTemplate() {
  const navigate = useNavigate();

  return (
    <main className="sign-up-main">
      <div className="sign-up-container-wrap">
        <Container>
          <div className="sign-up">
            <div className="sign-up-window-wrap">
              <div className="sign-up-window">
                <div className="sign-up-text-label">
                  <div className="sign-up-label">Sign Up</div>
                </div>
                <div className="sign-up-form-wrap">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      terms: false,
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                      authService.register(values.email, values.password);
                      navigate('/');
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
                        className="sign-up-form"
                        name="sign-up-form"
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
                        <Form.Check
                          required
                          name="terms"
                          label="Agree to terms and conditions"
                          onChange={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                          id="validationFormik0"
                        />
                        <Button variant="dark" type="submit" size="lg">
                          Sign Up
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="forgot-password-signin-wrap">
                  <div className="forgot-password-wrap">
                    <div className="forgot-password">
                      <p>Have an Account?</p>
                    </div>
                  </div>
                  <div className="sign-in-wrap">
                    <div className="sign-in">
                      <Link to={"/account/signin"}>Sign In</Link>
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

export default AccountSignUpTemplate;

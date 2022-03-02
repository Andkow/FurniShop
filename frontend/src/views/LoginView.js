import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../events/custEvents";

const LoginView = () => {
  // Component level states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Getting userlogin info form the state {loading, error, userInfo}
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // Checking URL query string to define redirect
  const redirect = [...searchParams].length > 0 ? [...searchParams][0][1] : "/";

  // Redirecting when we are already logged in
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHelper = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHelper}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password Address</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="outline-primary" className="my-3">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          You Don't have an account yet?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            <Button variant="outline-success">Register</Button>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginView;

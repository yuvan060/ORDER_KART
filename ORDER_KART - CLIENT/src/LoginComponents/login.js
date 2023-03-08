import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LoginSignupForm = () => {
  const navigate = useNavigate();
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      fetch("http://localhost:7000/Customer/" + mailId)
        .then((response) => response.json())
        .then((res) => setCurrentUser(res));

      if (currentUser.password === password) {
        navigate("/layout/home", { state: { currentUser } });
        document.getElementById("error").innerHTML = "Login Success";
      } else {
        document.getElementById("error").innerHTML = "Login Failed";
      }
    }
  };

  return (
    <Container>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <input
          type="button"
          onClick={handleSubmit}
          value={isLogin ? "Login" : "Sign up"}
        ></input>

        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </Button>
      </Form>
      <p id="error"></p>
    </Container>
  );
};

export default LoginSignupForm;

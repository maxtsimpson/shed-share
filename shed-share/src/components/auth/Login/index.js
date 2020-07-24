import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../../../shedShare.png";
import { Logo, Card, Form, Input, Button } from 'react-materialize'
// import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../../../context/auth";

//https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios.post("/auth/login", {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
        <h2>OR</h2>
        <a className='btn blue text-white' href='/auth/facebook'>Sign In with Facebook</a>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError && <p className='red text-white'>The username or password provided were incorrect!</p>}
    </Card>
  );
}

export default Login;
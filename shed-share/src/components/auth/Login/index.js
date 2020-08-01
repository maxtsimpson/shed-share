import React, { useState,useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../../../shedShare.png";
import { Col, Card, CardTitle, TextInput, Button, Row } from 'react-materialize'
import { useAuth,AuthContext } from "../../../context/auth.js";
import './style.css'
// import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";


//https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

function Login() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const Auth = useContext(AuthContext);

  console.log({Auth})

  function postLogin() {
    const baseURL = (process.env.ROOT_URL || "http://localhost") + ":" + (process.env.PORT || "3001" )
    const loginURL = baseURL + "/api/auth/login"
    console.log(loginURL)
    axios.post(loginURL, {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        console.log({result})
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(error => {
      console.log(error)
      setIsError(true);
    });
  }

  function postFBLogin() {
    axios.get(process.env.ROOT_URL + "/api/auth/facebook", {
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(error => {
      console.log(error)
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/NewsFeed" />;
  }
  
  return (
    <Row
      className="center"
    >
      <Col m={3} s={0}></Col>
      <Col m={6} s={12}>
        <Card
          className="center"
        >
          <h1>Login</h1>
          <TextInput
            id="loginEmail"
            type="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
            placeholder="email"
          />
          <TextInput
            id="loginPassword"
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
            placeholder="password"
          />
          <a className='btn' onClick={postLogin}>Sign In</a>
          <a className='btn blue text-white' onClick={postFBLogin}>Sign In with Facebook</a>
          <a href="/signup">Don't have an account?</a>
          {isError && <p className='red text-white'>The username or password provided were incorrect!</p>}
        </Card>
      </Col>
      <Col m={3} s={0}></Col>
    </Row>
  );
}

export default Login;
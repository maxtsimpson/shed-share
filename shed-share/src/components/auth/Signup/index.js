import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import M, { Card, TextInput, Button } from 'react-materialize'
import axios from 'axios';
import './style.css'

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const history = useHistory();

    const handleSignupError = (error) => {
        console.log(error)
        //need to use a toast or something to show this back to the user
    }

   
    const postUser = () => {
        if (!(password === passwordRepeat)) {
            handleSignupError('passwords do not match')
            return
        }

        const userData = { email, password }

        const signupURL = (process.env.ROOT_URL || "http://localhost:3001") + "/api/auth/signup"
        console.log(signupURL)
        
        axios.post(signupURL, userData)
            .then(function (data) {
                history.push("/");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(error => handleSignupError(error));
    }

    return (
        <Card>
            <TextInput 
                type="email" 
                value={email}
                placeholder="email"
                onChange={event => {
                    setEmail(event.target.value);
                }}
            />
          <TextInput
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
            placeholder="password"
          />
          <TextInput
            type="password"
            value={passwordRepeat}
            onChange={event => {
                setPasswordRepeat(event.target.value);
            }}
            placeholder="password"
          />
            <Button onClick={postUser}>Sign Up</Button>
            <Link to="/login">Already have an account?</Link>
        </Card>
    )
}

export default Signup
import React from "react";
import { Link } from 'react-router-dom';
import logoImg from "../../../../public/images/logo.png";
import M, { Card, Form, Input, Button, Navbar, Icon, NavItem } from 'react-materialize'
import axios from 'axios';
import { useAuth } from "../context/auth";

function Signup() {
    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Input type="password" placeholder="password again" />
                <Button>Sign Up</Button>
            </Form>
            <Link to="/login">Already have an account?</Link>
        </Card>
    )
}

export default Signup
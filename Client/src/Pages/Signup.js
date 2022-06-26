import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
    const API_BASE_URL = "http://localhost:5005/api";
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleEmailState = (event) => {
        setUser({ ...user, email: event.target.value });
    };

    const handlePasswordState = (event) => {
        setUser({ ...user, password: event.target.value });
    };


    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            await axios.post(API_BASE_URL + "/signup", user);
            navigate("/");
        } catch (err) {
            console.log("***Please fill all the fields to proceed");
        }
    };


    return (
        <div className='signup'>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailState} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordState} />
                </Form.Group>

                <Button variant="danger" type="submit">
                    REGISTAR
                </Button>
            </Form>
        </div>
    )
}

export default Signup
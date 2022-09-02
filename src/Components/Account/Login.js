import './Account.css'

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Login() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        }

        setValidated(true)
    };

    return(
    <Container>
    <center>
        <div id="login-container">
        <h1>Login</h1>
        <p>Please enter your login information.</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <InputGroup hasValidation>
                <Form.Control
                    id="login-credentials"
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                />
            </InputGroup>
        </Form.Group>
        <Form.Control.Feedback type="invalid">
            Please choose a username.
        </Form.Control.Feedback>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <InputGroup hasValidation>
                <Form.Control
                    id="login-credentials"
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
        <Form.Control.Feedback type="invalid" id="login-credentials">
            Please choose a username.
        </Form.Control.Feedback>
        <br />
            <Button type="submit">Submit</Button>
            <br /><br />
            <Button type="submit" variant="secondary" id="forgot-button" href='/ForgotPassword'>Forgot Password</Button>
            <br />
            <Button type="submit" variant="secondary" id="forgot-button" disabled>Create Account</Button>
        </Form>
        </div>
    </center>
    <br /><br /><br /><br /><br /><br />
    </Container>
    )
}
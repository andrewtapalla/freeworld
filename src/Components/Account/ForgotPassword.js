import './Account.css'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function ForgotPassword() {
    return(
    <Container>
    <br /><br /><br /><br />
    <center>
        <div id="forgot-password-container">
            <h1>Forgot Password?</h1>
            <p>Don't worry, enter your email and we'll send you a code to reset.</p>
            <Form>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <Form.Control
                        id="login-credentials"
                        type="email"
                        placeholder="Your Email"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                </Form.Group>
            </Form>
            <Button type="submit">Submit</Button>
            <br /><br />
            <Button type="submit" variant="secondary" href="/Login">Back</Button>

        </div>
    </center>
    <br /><br /><br /><br /><br /><br /><br /><br />
    </Container>
    )
}
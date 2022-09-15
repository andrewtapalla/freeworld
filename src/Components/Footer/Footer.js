import './Footer.css'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



export default function Footer() {
    return(
    <div id="footer-container">
    <Container>
        <CardGroup>
         <Card id="card-group-test">
                <Card.Body>
                <Card.Title id="card-title">About Us</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="card-group-test">
                <Card.Body>
                <Card.Title id="card-title">Links</Card.Title>
                <a href="/Staff"><p>Staff</p></a>
                <a href="#"><p>Discord</p></a>
                <a href="/Application"><p>Be a mod</p></a>
                </Card.Body>
            </Card>
            <Card id="card-group-test">
                <Card.Body>
                <Card.Title id="card-title">Sign up for our newsletter:</Card.Title>
                <InputGroup className="mb-2">
                    <Form.Control
                    placeholder="Email"
                    type="email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button>Submit</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    </Container>
    </div>
    )
}
import { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import './Splash.css'

export default function Splash() {
    const [show, setShow] = useState(true);

    return(
    <Container>
        <img src="/Images/Freeworld-Logo.png" id="freeworld-image" />
        <br /><br /><br />
        <center>
        <Alert show={show} variant="success" id="alert-test">
          <Alert.Heading>Freeworld server address:</Alert.Heading>
          <br />
            <p id="alert-text">home.tapalla.com</p>
          <hr />
           <div className="d-flex justify-content-end">
             <Button onClick={() => setShow(false)} variant="outline-secondary">
               Close
             </Button>
           </div>
        </Alert>
        {!show && <Button onClick={() => setShow(true)} id="play-button"><img src="/Images/play.png" width="16px" /> Play now</Button>}
      </center>
        <br /><br />
        <Card id="card-body">
            <Card.Body>
                <Card.Title id="card-body">Welcome to Freeworld</Card.Title>
                <br />
                <Card.Text id="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum tellus sit amet nulla feugiat maximus.
                In ac ex vestibulum, elementum neque sit amet, ornare metus. In gravida nisl et tortor sodales facilisis. 
                Etiam odio augue, euismod non mattis et, aliquet vitae lorem. 
                </Card.Text>
            </Card.Body>
        </Card>
        <br /><br /><br /><br /><br />
        <h3><span>Server Updates:</span></h3>
        <br /><br /><br />
        <Card id="card-body">
            <Card.Body>
                <Card.Title id="card-body">Welcome to Freeworld</Card.Title>
                <br />
                <Card.Text id="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum tellus sit amet nulla feugiat maximus.
                In ac ex vestibulum, elementum neque sit amet, ornare metus. In gravida nisl et tortor sodales facilisis. 
                Etiam odio augue, euismod non mattis et, aliquet vitae lorem. 
                </Card.Text>
            </Card.Body>
        </Card>
        <br /><br /><br />
        <h3><span>News</span></h3>
        <br /><br /><br />
        <CardGroup>
            <Card id="card-group-test">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title id="card-title">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="card-group-test">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title id="card-title">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="card-group-test">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title id="card-title">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <br /><br /><br /><br /><br />
    </Container>
    )
}
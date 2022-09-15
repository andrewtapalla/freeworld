import './Application.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Application() {
    return(
    <>
      <Container className="application-container">
        <center><h1>Staff Application</h1></center>
        <br />
        <div className="application-body">
            <br />
            <p>Thank you for your interest in joining a Freeworld staff! We are always looking for talented individuals to help building our community. Please take your time below and describe yourself and how you would be an asset to our team! </p>
            <br />
            <p>1) Please tell us about yourself.</p>
              <InputGroup className="text-group-test">
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br />
            <p>2) How old are you?</p>
              <Dropdown className="d-inline mx-2"
              id="dropdown-button">
                <Dropdown.Toggle id="dropdown-autoclose-true" className="dropdown-button">
                  Age
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">> 18</Dropdown.Item>
                  <Dropdown.Item href="#">18-29</Dropdown.Item>
                  <Dropdown.Item href="#">29-39</Dropdown.Item>
                  <Dropdown.Item href="#">39-49</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br /><br />
            <p>3) What is your Minecraft Ign?</p>
              <input id="input-field"></input>
              <br />
            <p>4) What is your Discord Ign?</p>
              <input id="input-field"></input>
              <br />
            <p>5) Why do you want to be a staff member for Freeworld? What makes you the best candidate?</p>
              <InputGroup className="text-group-test">
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br />
            <p>6) Are you able to record and save images of hackers or rule breakers?</p>
              <InputGroup className="text-group-test">
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br />
            <p>7) How active can you be in Freeworld?</p>
              <InputGroup className="text-group-test">
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br />
            <p>8) Do you have any past experience in maintaining or administrating servers?</p>
              <InputGroup className="text-group-test">
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br />
            <p>9) Is there anything else you would like to add?</p>
              <InputGroup className="text-group-test">
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br />
            <br />
            <center>
              <p>A staff member will review your application and if you are selected to move forward, you will be contacted regarding the next steps. Please allow us 5-7 business days to respond.</p>
              <Button>Submit</Button>
            </center><br />
        </div>
        <br /><br />
      </Container>
    </>
    )
}
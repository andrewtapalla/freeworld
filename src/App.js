import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Splash from './Components/Splash/Splash'
import Footer from './Components/Footer/Footer'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" id="font-type">Home</Nav.Link>
            <Nav.Link href="#features" id="font-type">Staff</Nav.Link>
            <Nav.Link href="#pricing" id="font-type">Rules</Nav.Link>
            <Nav.Link href="#pricing" id="font-type">Support</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing" id="font-type-2">Login</Nav.Link>
            <Nav.Link href="#blank"><img src="/Images/twitter.png" width="24px" /></Nav.Link>
            <Nav.Link href="#blank"><img src="/Images/discord-1.png" width="24px" /></Nav.Link>
            <Nav.Link href="#blank"><Button id="button-color"><img src="/Images/play.png" width="16px" /> Play</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br /><br /><br />
      <Splash />
      <Footer />
    </>
  );
}

export default App;

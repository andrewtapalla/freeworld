import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Splash from './Components/Splash/Splash'
import Footer from './Components/Footer/Footer'
import Login from './Components/Account/Login'
import ForgotPassword from './Components/Account/ForgotPassword'
import Staff from './Components/Staff/Staff'
import Rules from './Components/Rules/Rules'
import Support from './Components/Support/Support'


import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" id="font-type">Home</Nav.Link>
            <Nav.Link href="/Staff" id="font-type">Staff</Nav.Link>
            <Nav.Link href="/Rules" id="font-type">Rules</Nav.Link>
            <Nav.Link href="/Support" id="font-type">Support</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login" id="font-type-2">Login</Nav.Link>
            <Nav.Link href="#blank"><img src="/Images/twitter.png" width="24px" /></Nav.Link>
            <Nav.Link href="#blank"><img src="/Images/discord-1.png" width="24px" /></Nav.Link>
            <Nav.Link href="#blank"><Button id="button-color"><img src="/Images/play.png" width="16px" /> Play</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br /><br /><br />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

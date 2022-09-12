import './Rules.css'

import Container from 'react-bootstrap/Container'

export default function Rules() {
    return(
    <Container>
        <center>
                <h1 id="rules-title">Rules</h1>
            <p id="rules-paragraph">Please read our server rules below. By reading our list of rules, you agree to follow the list of rules mentioned below. If you have been punished or banned, you have the opportunity to appeal, please click here.</p>
      <div className="rules-container">
          {/* <h1 id="rules-title">Rules</h1>
            <p id="rules-paragraph">Please read our server rules below. By reading our list of rules, you agree to follow the list of rules mentioned below. If you have been punished or banned, you have the opportunity to appeal, please click here.</p> */}
            <br />
          <div id="server-rules">
            <p>Server Rules:</p>
          </div>
          <br />
            <ul id="rules-list">
              <li>Rule #1</li>
                <p>No griefing</p>
              <li>Rule #2</li>
                <p>No hacking</p>
              <li>Rule #3</li>
                <p>No looting</p>
            </ul>
          <br />
         <div id="server-rules">
             <p>Discord Rules:</p>
         </div>
         <br />
         <ul id="rules-list">
              <li>Rule #1</li>
                <p>No spamming</p>
              <li>Rule #2</li>
                <p>No soliciting</p>
              <li>Rule #3</li>
                <p>No advertising</p>
            </ul> 
        <br />
      </div>
      <br />
      </center>  
    </Container>
    )
}
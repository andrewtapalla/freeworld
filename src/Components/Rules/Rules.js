import './Rules.css'

import Container from 'react-bootstrap/Container'

export default function Rules() {
    return(
    <Container>
        <center>
                <h1 id="rules-title">Rules</h1>
                <br /> <br />
      <div className="rules-container">
          <br />
          <p id="rules-paragraph">Please read our server rules below. By reading our list of rules, you agree to follow the list of rules mentioned below. If you have been punished or banned, you have the opportunity to appeal, please click here.</p>
          {/* <h1 id="rules-title">Rules</h1>
            <p id="rules-paragraph">Please read our server rules below. By reading our list of rules, you agree to follow the list of rules mentioned below. If you have been punished or banned, you have the opportunity to appeal, please click here.</p> */}
          <div id="server-rules">
            <p>Server Rules:</p>
          </div>
          <br />
            <ul id="rules-list">
              
                <p>No griefing</p>
              
                <p>No hacking</p>
              
                <p>No looting</p>
            </ul>
          <br />
         <div id="server-rules">
             <p>Discord Rules:</p>
         </div>
         <br />
         <ul id="rules-list">
              
                <p>No spamming</p>
             
                <p>No soliciting</p>
              
                <p>No advertising</p>
            </ul> 
        <br />
      </div>
      <br />
      </center>  
    </Container>
    )
}
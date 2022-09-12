import './Staff.css'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

export default function Staff() {
    return(
    <>
    <Container>
      <center>
        <div className="staff-container">
            <h2 className="staff-title">Staff Members</h2>
            <br />
            <p className="player-container" id="title-color">Owner</p>
            <div id="photo-row">
              <img src="Images/reMARCable.png" className="profile-photo" /><p id="name-text">reMARCable</p>
            </div>
              <p className="player-container" id="title-color">Developers</p>
            <CardGroup id="group-test">
              <Card id="card-background">
                <div id="photo-row">
                    <img src="Images/reMARCable.png" className="profile-photo" /><p id="name-text">reMARCable</p>
                </div>
              </Card>
              <div id="divider" />
              <Card id="card-background">
                <div id="photo-row">
                  <img src="Images/andrizzle.png" className="profile-photo"  /><p id="name-text" >ANDRiZZLE_</p>
                </div>
              </Card>
            </CardGroup>
              <p className="player-container" id="title-color">Staff</p>
            <CardGroup id="group-test">
            <Card id="card-background">
              <div id="photo-row">
                  <img src="Images/reMARCable.png" className="profile-photo" /><p id="name-text">reMARCable</p>
              </div>
            </Card>
            <div id="divider" />
            <Card id="card-background">
              <div id="photo-row">
                <img src="Images/andrizzle.png" className="profile-photo"  /><p id="name-text" >ANDRiZZLE_</p>
              </div>
            </Card>
          </CardGroup>
          <br /><br /><br />
          <Button id="button-test">Apply to be a mod today!</Button>
          <br /><br />
        </div>
            {/* <p className="player-container" id="title-color">Staff</p>
            <div id="photo-row">
                <img src="Images/reMARCable.png" className="profile-photo" /><p id="name-text">reMARCable</p>
            </div>
            <div id="photo-row">
              <img src="Images/andrizzle.png" className="profile-photo"  /><p id="name-text">ANDRiZZLE_</p>
            </div> */}
            <br /><br />
        </center>
    </Container>
    <br />
    </>
    )
}
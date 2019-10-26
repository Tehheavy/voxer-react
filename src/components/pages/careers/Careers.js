import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './Careers.css'

function Careers() {
  return (
    <div className="Careers-class">
      <br></br>
      <Container>
          <Row className="justify-content-lg-center">
            <Col sm={6}>
               <div className="careers-card">
                 <h2>CAREERS</h2>
                 <hr></hr>
                 <br></br>
                 <p>
                      Voxer Tech specializes in mobile applications in the communication industry. We currently have five million users and are growing very quickly! We are currently looking for highly ambitious, self-motivated, and bright developers to join our winning team!
                 </p>
                 <ul>
                   <li><a href="">VX-110 Java Server</a></li>
                   <li><a href="">VX-115 FullStack Developer: JavaScript + Node.js</a></li>
                   <li><a href="">VX-150 Android</a></li>
                   <li><a href="">VX-160 iOS</a></li>
                   <li><a href="">VX-175 Angular / React FED Front-End Web Developer</a></li>
                 </ul>
                 <button>If you would like to join our dynamic and vibrant team, please contact us.</button>
               </div>
            </Col>
            <Col sm={6}>
               <div className="careers-logo-card">

               <br></br>
               <br></br>
                 <img src="https:///img1.wsimg.com/isteam/stock/6975" style={{height:"400px"}}></img>
                 <p style={{textAlign:"center",color:"gray"}}>
                    Reach out to us today and see just why the grass is greener on our side, send us your Curriculum Vitae.
                 </p>

               </div>
            </Col>
          </Row>
        </Container>
    </div>

  );
}
export default Careers;

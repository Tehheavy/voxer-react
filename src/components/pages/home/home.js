import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './home.css'

function Home() {
  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={4}>
               <div className="advert-card">
                 <p>
                    You became an iOS developer to change the mobile world around you. - With Voxer, you can.
                 </p>
                 <button>CURRENT OPEN POSITIONS</button>
               </div>
            </Col>
            <Col sm={4}>
               <div className="advert-card">
                 <img src="https://img1.wsimg.com/isteam/stock/11252/:/rs=w:223,h:223,cg:true,m/cr=w:223,h:223" style={{borderRadius:"100px"}}></img>
                 <p>
                    Reach out to us today and see just why the grass is greener on our side, send us your Curriculum Vitae.
                 </p>
                 <button>CONTACT US</button>
               </div>
            </Col>
            <Col sm={4}>
               <div className="advert-card">
                 <p>Enjoy a refined, flexible, and elegant work environment in an atmosphere only Voxer can offer.</p>
                 <button>OUR OFFICE</button>
               </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;

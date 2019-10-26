import React from "react";
import './ContactUs.css'
import Button from 'react-bootstrap/Button'

function ContactUs() {
  return (
    <div className="contact-us-class">
      <br></br>
          <h5>Contact Us</h5>
           <p>Send us your CV. If you are a good fit, we will reach out to you very soon!</p>
           <br></br>
           <br></br>
           <br></br>
           <a href="mailto:hr@voxertech.com">
              <Button variant="outline-warning">Send Us Your CV</Button>
           </a>
    </div>

  );
}
export default ContactUs;

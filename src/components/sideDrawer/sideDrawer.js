import React from 'react';

import './sideDrawer.css';

function sideDrawer(props) {
    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';
    }

    return(
        
        <nav className={drawerClasses}>
            <div className="side-drawer-button-close"><button onClick={props.click}>X</button></div>
            <ul>
            <li><a href="/">Home</a></li>
            <hr></hr>
            <li><a href="/contact-us">Contact Us</a></li>
            <hr></hr>
            <li><a href="/careers">Careers</a></li>
            <hr></hr>
            <li><a href="/our-office">Our Office</a></li>
            </ul>
        </nav>
    );
}
  export default sideDrawer;
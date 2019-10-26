import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  
} from "react-router-dom";
import './navbar.css';
import './sideDrawer/DrawerToggleButton';
import ToggleDrawerButton from "./sideDrawer/DrawerToggleButton";


function NewNavbar(props) {
  return (
    <header className="navigation-bar-class">
      <nav className="navigation-bar-navigation-class">
        <div className="navigation-bar-hamburger-class">
          <ToggleDrawerButton click={props.drawerClickHandler}></ToggleDrawerButton>
          
        </div>
        <div className="Spacer1"></div>
        {/* <div className="navigation-bar-logo-class">
          <a href="/">Logo</a>
        </div> */}
        <div className="navigation-bar-items-class">
          <ul>
            <li><NavLink activeStyle={{color:'rgb(161, 96, 0)'}} exact to="/">HOME</NavLink></li>
            <li><NavLink activeStyle={{color:'rgb(161, 96, 0)'}} exact to="/contact-us">CONTACT US</NavLink></li>
            <li><NavLink activeStyle={{color:'rgb(161, 96, 0)'}} exact to="/careers">CAREERS</NavLink></li>
            <li><NavLink activeStyle={{color:'rgb(161, 96, 0)'}} exact to="/our-office">OUR OFFICE</NavLink></li>
          </ul>
        </div>
        <div className="Spacer2"></div>
      </nav>
    </header>
  );
}
export default NewNavbar;

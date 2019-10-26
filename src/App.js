import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  
} from "react-router-dom";

import Home from "./components/pages/home/home";
import NewNavbar from "./components/navbar";
import Contact from "./components/pages/contact/ContactUs";
import SideDrawer from './components/sideDrawer/sideDrawer'
import Backdrop from './components/BackDrop/BackDrop'
import VoxerTech from './components/voxertech';
import Careers from './components/pages/careers/Careers'
import Footer from './components/footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      sideDrawerOpen:false
    };
    this.drawerToggleClickHandler=this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler=this.backdropClickHandler.bind(this)
  }


   drawerToggleClickHandler = () =>{
    
    this.setState((prevState)=>{
    return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  }; 

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false});

    console.log("status:"+this.state.sideDrawerOpen)
  };
  render(){
    let backDrop;
    if(this.state.sideDrawerOpen){
      backDrop=<Backdrop click={this.drawerToggleClickHandler}/>;
    }
  return (

      <div className="App" style={{height:'100%'}}>
        <Router>
          <NewNavbar drawerClickHandler={this.drawerToggleClickHandler}></NewNavbar>
          <SideDrawer click={this.backdropClickHandler} show={this.state.sideDrawerOpen}/>
          {backDrop}
          <main style={{marginTop:'64px'}}>
            <VoxerTech></VoxerTech>
          </main>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/careers" component={Careers} />
          </Switch>
          <footer>
          <Footer></Footer>
          </footer>

        </Router>
      </div>
  );
  }
}

export default App;

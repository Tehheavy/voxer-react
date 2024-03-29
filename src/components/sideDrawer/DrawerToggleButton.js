import React from 'react';

import './DrawerToggleButton.css';

function ToggleDrawerButton(props) {
    return(
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button-line"/>
                <div className="toggle-button-line"/>
                <div className="toggle-button-line"/>
            </button>
    );
}
  export default ToggleDrawerButton;
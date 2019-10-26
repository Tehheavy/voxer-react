import React from 'react';

import './BackDrop.css';

function Backdrop(props) {
    return(
        <div className="backdrop" onClick={props.click}></div>
    );
}
  export default Backdrop;
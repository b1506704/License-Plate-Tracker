import React, { useEffect } from 'react';
import Draggable from 'react-draggable';

import './LicensePlate.css';

const LicensePlate = ({currentBase64}) => {
  const onCloseForm = () => {
    //
  }
  return (
    <Draggable bounds="parent">
      <div id="menu" className="lp_container_menu">
        <div className="title_bar">
           LP ID 
        </div>
        <div className="user_info">
          <div> Owner: <span> Loading...</span>  </div>
          <div> Age: <span> Loading...</span> </div>
          <div> Gender: <span> Loading...</span> </div>
          <div> Register location: <span> Loading...</span> </div>
        </div>
        <div className="lp_image_container">
          <img className="lp_image" src={`${currentBase64}`}/>
        </div>
      </div>
    </Draggable>
  );
};
export default LicensePlate;
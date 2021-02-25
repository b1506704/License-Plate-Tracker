import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';

import './LicensePlate.css';
import Button from '../../Button/Button';

const LicensePlate = ({ lp, setCurrentLpId}) => {
  const dispatch = useDispatch();
  
  const onCloseForm = () => {
    //
  }
  return (
    <Draggable bounds="parent">
      <div id="menu" className="lp_container_menu">
        <div className="title_bar">
          LP ID {lp}
          <Button onClick={onCloseForm}>&#x2716;</Button>      
        </div>
        <div className="user_info">
          
          {/* <label> UserName: {lp.userName} </label> */}
          {/* <input type='text' value={userInfo.userName} 
            onChange={(e) => setUserInfo({...userInfo, userName : e.target.value})}>
          </input>  */}
          {/* <label> Age: {lp.age} </label> */}
          {/* <label> Gender: {lp.gender} </label> */}
          {/* <label> Register location: {lp.registerPlace} </label> */}
        </div>
      </div>
    </Draggable>
  );
};
export default LicensePlate;
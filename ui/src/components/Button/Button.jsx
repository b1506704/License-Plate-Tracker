import React, { useEffect, useState } from 'react';
import './Button.css';

const Button = ({displayText, onClick, type}) => {
  return (
    <button className="button" type={type} onClick={onClick}> 
      {displayText}
    </button>
  );
};
export default Button;
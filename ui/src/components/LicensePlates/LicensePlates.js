import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './LicensePlates.css';
import LicensePlate from './LicensePlate/LicensePlate';

const LicensePlates = ({currentBase64}) => {
  return (
    <div className="forms_container">
      <LicensePlate currentBase64={currentBase64}></LicensePlate>
    </div>
  );
};
export default LicensePlates;
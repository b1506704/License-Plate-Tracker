import React, { useState, useEffect } from 'react';
import './App.css';
import LicensePlates from './components/LicensePlates/LicensePlates';
import SearchBar from './components/SearchBar/SearchBar';
import { getLp } from './actions/licensePlate';
import { useDispatch } from 'react-redux';

const App = () => {
  const [currentImage, setCurrentImage] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLp());
  }, [currentImage, dispatch]);
  
  return (
    <div className="container">
      <div className="title">
        <span>License Plate</span>
        <br />
        <span>&#9886;Tracker&#9887;</span>
        <br />
      </div>
      <LicensePlates currentBase64={currentImage}> </LicensePlates>  
      <SearchBar currentBase64={currentImage} setCurrentBase64={setCurrentImage}> </SearchBar>
    </div>
  );
};
export default App;

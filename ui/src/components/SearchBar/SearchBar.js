import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import  { uploadLp } from '../../actions/licensePlate';
import './SearchBar.css';
import Button from '../Button/Button';

const SearchBar = ({currentBase64, setCurrentBase64}) => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(uploadLp(currentBase64));
  };
  return (
    <form autoComplete="off" noValidate className="search_bar_container" onSubmit={handleSubmit}>
      <label> ID </label>
      <div className="base64_container">
        <FileBase className="base64"  type="file" multiple={false} 
          onDone = {({base64}) => { 
            setCurrentBase64(base64);
          }}> 
        </FileBase>
      </div> 
      <Button type='submit' displayText="&#9737;"></Button>      
    </form>
  );
};
export default SearchBar;
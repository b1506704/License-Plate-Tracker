import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import './SearchBar.css';
import Button from '../Button/Button';

const SearchBar = ({setCurrentLpId}) => {
  const [lpIDbase64, setlpID ] = useState(''); 
  const [searchID, setSearchID] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  const handleUpload = () => {
    //
  }
  return (
    <form autoComplete="off" noValidate className="search_bar_container" onSubmit={handleSubmit}>
      <label> ID </label>
      <input type='text' onChange={(e) => setSearchID(searchID => {searchID = e.target.value})}></input> 
      {/* <Button displayText='Upload' onClick={handleUpload}></Button>       */}
      <Button type='submit' displayText="&#9737;"></Button>      
    </form>
  );
};
export default SearchBar;
import React from 'react';
import { useSelector } from 'react-redux';

import './LicensePlates.css';
import LicensePlate from './LicensePlate/LicensePlate';

const LicensePlates = ({setCurrentLpId}) => {
  const licensePlates = useSelector((state) => { state.licensePlate })
  // const [userInfo, setUserInfo] = useState({
  //   userName:'',
  //   age:'',
  //   gender:'',
  //   registerPlace:'',
  //   licensePlateID:''
  // });

  // useEffect(() => {
  //  if (lpID) {
  //    setUserInfo({...setUserInfo, licensePlateID: lpID});
  //  } else {
  //    console.log("No LP_ID found");
  //  }
  // },[lpID]);
  const onCloseForm = () => {
    //
  }
  return (
    licensePlates ? <div> Loading... </div> : (
      <LicensePlate lp={licensePlates} setCurrentLpId={setCurrentLpId} ></LicensePlate>
    )
  );
};
export default LicensePlates;
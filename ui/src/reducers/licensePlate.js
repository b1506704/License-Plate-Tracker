import { FETCH_ALL, UPLOAD } from '../constants/actionTypes';

const initalState = {
  userName:'',
  age:'',
  gender:'',
  registerPlace:'',
  licensePlateID:''
};
export default (licensePlate = initalState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPLOAD:
      return [...licensePlate, action.payload];
    default:
      return licensePlate;
  }
};


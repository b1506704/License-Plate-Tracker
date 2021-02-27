import { FETCH_ALL, UPLOAD } from '../constants/actionTypes';

const intialState = {
  id:'test',
  base64:''
}
export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPLOAD:
      return {...state, base64: action.payload};
    default:
      return state;
  }
};


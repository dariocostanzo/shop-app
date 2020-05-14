// To utilise the token
import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
  token: null,
  userId: null
};
//export the reducer function
export default (state = initialState, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

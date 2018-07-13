import { AUTHENTICATE } from '../actions/auth/authenticate';
import { UNAUTHENTICATE } from '../actions/auth/unauthenticate';

const initialState = {
  isAuthenticated: false,
  uid: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true
      };
    case UNAUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default auth;

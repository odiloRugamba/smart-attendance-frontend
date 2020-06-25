import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  isLoggedIn: false,
  error: null,
};


const LoginReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: true,
        user: payload.data,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        user: {},
        isLoading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;

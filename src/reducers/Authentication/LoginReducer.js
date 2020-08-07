import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE, SET_CURRENT_USER } from '../../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  isAuthenticated : false,
  error: null,
};


const LoginReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_START:
        return {
            ...state,
            isLoading: true
        }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.data,
        isAuthenticated : true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        user: {},
        isLoading: false,
        error: payload.error,
        isAuthenticated : false,
      };
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: {
            image: payload,
          },
        };
    default:
      return state;
  }
};

export default LoginReducer;

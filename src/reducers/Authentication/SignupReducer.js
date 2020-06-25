import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGN_UP_START } from '../../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  error: null,
};


const SignupReducer = (state = INITIAL_STATE, {type, payload}) => {
   
  switch (type) {
    case SIGN_UP_START:
        return {
            ...state,
            isLoading: true
        }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: true,
        user: payload,
        error: null,
      };
      
    case SIGNUP_ERROR:
      return {
        user: {},
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

export default SignupReducer;

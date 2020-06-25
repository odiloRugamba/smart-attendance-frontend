import {  FORGOT_PASSWORD_START, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR } from '../../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  error: null,
};


const ForgotPasswordReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FORGOT_PASSWORD_START:
        return {
            ...state,
            isLoading: true
        }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        error: null,
      };
      
    case FORGOT_PASSWORD_ERROR:
      return {
        user: {},
        isLoading: false,
        error: payload
      };
    default:
      return state;
    }
};

export default ForgotPasswordReducer;

import {
    ADD_SCHOOL_START,
    ADD_SCHOOL_SUCCESS,
    ADD_SCHOOL_FAILURE 
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    user: {},
    error: null,
  };
  
  
  const SignupReducer = (state = INITIAL_STATE, {type, payload}) => {
     
    switch (type) {
      case ADD_SCHOOL_START:
          return {
              ...state,
              isLoading: true
          }
      case ADD_SCHOOL_SUCCESS:
        return {
          ...state,
          isLoading: true,
          user: payload,
          error: null,
        };
        
      case ADD_SCHOOL_FAILURE:
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
  
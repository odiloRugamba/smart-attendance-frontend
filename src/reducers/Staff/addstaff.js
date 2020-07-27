import {
    ADD_STAFF_START,
    ADD_STAFF_SUCCESS,
    ADD_STAFF_ERROR 
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    staff: {},
    error: null,
  };
  
  
  const StaffReducer = (state = INITIAL_STATE, {type, payload}) => {
     
    switch (type) {
      case ADD_STAFF_START:
          return {
              ...state,
              isLoading: true
          }
      case ADD_STAFF_SUCCESS:
        return {
          ...state,
          isLoading: true,
          staff: payload,
          error: null,
        };
        
      case ADD_STAFF_ERROR:
        return {
          staff: {},
          isLoading: false,
          error: payload.error
        };
      default:
        return state;
    }
  };
  
  export default StaffReducer;
  
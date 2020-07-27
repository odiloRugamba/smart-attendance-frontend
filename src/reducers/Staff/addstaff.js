import {
    ADD_STAFF_START,
    ADD_STAFF_SUCCESS,
    ADD_STAFF_ERROR,
    GET_STAFFS_START,
    GET_STAFFS_SUCCESS,
    GET_STAFFS_ERROR
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    staff: {},
    staffs: {},
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
        case GET_STAFFS_START:
          return {
              ...state,
              isLoading: true
          }
      case GET_STAFFS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          staffs: payload,
          error: null,
        };
        
      case GET_STAFFS_ERROR:
        return {
          isLoading: false,
          error: payload.error
        };
      default:
        return state;
    }
  };
  
  export default StaffReducer;
  
import {
    ADD_SCHOOL_START,
    ADD_SCHOOL_SUCCESS,
    ADD_SCHOOL_FAILURE,
    GET_SCHOOLS_START,
    GET_SCHOOLS_ERROR,
    GET_SCHOOLS_SUCCESS
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    schools: {},
    error: null,
  };
  
  
  const SchoolReducer = (state = INITIAL_STATE, {type, payload}) => {
     
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
          schools: payload,
          error: null,
        };
        
      case ADD_SCHOOL_FAILURE:
        return {
          isLoading: false,
          error: payload.error
        };
        case GET_SCHOOLS_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_SCHOOLS_SUCCESS:
          return {
            ...state,
            isLoading: true,
            schools: payload,
            error: null,
          };
          
        case GET_SCHOOLS_ERROR:
          return {
            isLoading: false,
            error: payload.error
          };
      default:
        return state;
    }
  };
  
  export default SchoolReducer;
  
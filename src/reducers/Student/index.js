import {
    ADD_STUDENT_START,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_ERROR
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    students: {},
    error: null,
  };
  
  
  const StudentReducer = (state = INITIAL_STATE, {type, payload}) => {
     
    switch (type) {
      case ADD_STUDENT_START:
          return {
              ...state,
              isLoading: true
          }
      case ADD_STUDENT_SUCCESS:
        return {
          ...state,
          isLoading: true,
          students: payload,
          error: null,
        };
        
      case ADD_STUDENT_ERROR:
        return {
          isLoading: false,
          error: payload.error
        };

      default:
        return state;
    }
  };
  
  export default StudentReducer;
  
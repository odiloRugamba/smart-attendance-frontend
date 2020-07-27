import {
    ADD_CLASS_START,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_ERROR,
    GET_CLASSES_START,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_ERROR,
    UPDATE_CLASS_START,
    UPDATE_CLASS_SUCCESS,
    UPDATE_CLASS_FAILURE,
    GET_STUDENTS_START,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_ERROR
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    classes: {},
    students: {},
    error: null,
  };
  
  
  const ClassReducer = (state = INITIAL_STATE, {type, payload}) => {
     
    switch (type) {
      case ADD_CLASS_START:
          return {
              ...state,
              isLoading: true
          }
      case ADD_CLASS_SUCCESS:
        return {
          ...state,
          isLoading: true,
          classes: payload,
          error: null,
        };
        
      case ADD_CLASS_ERROR:
        return {
          isLoading: false,
          error: payload.error
        };
        case GET_CLASSES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_CLASSES_SUCCESS:
          return {
            ...state,
            isLoading: true,
            classes: payload,
            error: null,
          };
          
        case GET_CLASSES_ERROR:
          return {
            isLoading: false,
            error: payload.error
          };
          case UPDATE_CLASS_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_CLASS_SUCCESS:
          return {
            ...state,
            isLoading: true,
            classes: payload,
            error: null,
          };
          
        case UPDATE_CLASS_FAILURE:
          return {
            isLoading: false,
            error: payload.error
          };
          case GET_STUDENTS_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_STUDENTS_SUCCESS:
          return {
            ...state,
            isLoading: false,
            students: payload,
            error: null,
          };
          
        case GET_STUDENTS_ERROR:
          return {
            isLoading: false,
            error: payload.error
          };
      default:
        return state;
    }
  };
  
  export default ClassReducer;
  
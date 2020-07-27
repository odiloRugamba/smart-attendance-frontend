import {
    ADD_SCHOOL_START,
    ADD_SCHOOL_SUCCESS,
    ADD_SCHOOL_FAILURE,
    GET_SCHOOLS_START,
    GET_SCHOOLS_ERROR,
    GET_SCHOOLS_SUCCESS,
    GET_SCHOOL_START,
    GET_SCHOOL_ERROR,
    GET_SCHOOL_SUCCESS,
    UPDATE_SCHOOL_START,
    UPDATE_SCHOOL_SUCCESS,
    UPDATE_SCHOOL_FAILURE,
    DELETE_SCHOOL_START,
    DELETE_SCHOOL_SUCCESS,
    DELETE_FAILURE,
    ONCHANGE_SCHOOL_SUCCESS,
  } from '../../actions/actionTypes';
  
  const INITIAL_STATE = {
    isLoading: false,
    schools: {},
    school: {},
    error: null,
    updatedSchools: {
      schoolAddress: "",
      schoolEmail: "",
      schoolLogo: null,
      schoolName: "",
      schoolPhone: "",
      userId: '',
      villageId: ''
    }
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
          isLoading: false,
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
            isLoading: false,
            schools: payload,
            error: null,
          };
          
        case GET_SCHOOLS_ERROR:
          return {
            isLoading: false,
            error: payload.error
          };
          case GET_SCHOOL_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_SCHOOL_SUCCESS:
          return {
            ...state,
            isLoading: false,
            school: payload,
            error: null,
          };
          
        case GET_SCHOOL_ERROR:
          return {
            isLoading: false,
            error: payload.error
          };
          case UPDATE_SCHOOL_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_SCHOOL_SUCCESS:
          return {
            ...state,
            isLoading: false,
            school: payload,
            error: null,
          };
          
        case ONCHANGE_SCHOOL_SUCCESS:
          const { name, value } = payload;
          return {
            ...state,
            isLoading: false,
            updatedSchools: {
              ...state.updatedSchool,
              [name]: value
            },
            error: null,
          };
          
        case UPDATE_SCHOOL_FAILURE:
          return {
            isLoading: false,
            error: payload.error
          };
          case DELETE_SCHOOL_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_SCHOOL_SUCCESS:
          return {
            ...state,
            isLoading: false,
            school: payload,
            error: null,
          };
          
        case DELETE_FAILURE:
          return {
            isLoading: false,
            error: payload.error
          };
      default:
        return state;
    }
  };
  
  export default SchoolReducer;
  
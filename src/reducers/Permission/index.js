import {
  CREATE_PERMISSION_START,
  CREATE_PERMISSION_SUCCESS,
  CREATE_PERMISSION_FAILURE,
  GET_PERMISSIONS_START,
  GET_PERMISSIONS_SUCCESS,
  GET_PERMISSIONS_ERROR,
  UPDATE_PERMISSION_START,
  UPDATE_PERMISSION_SUCCESS,
  UPDATE_PERMISSION_FAILURE,
  DELETE_PERMISSION_START,
  DELETE_PERMISSION_SUCCESS,
  DELETE_PERMISSION_FAILURE,
} from '../../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  permissions: {},
  error: null
};


const PermissionReducer = (state = INITIAL_STATE, {
  type,
  payload
}) => {

  switch (type) {
    case CREATE_PERMISSION_START:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_PERMISSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
          permissions: payload,
          error: null,
      };

    case CREATE_PERMISSION_FAILURE:
      return {
        ...state,
        isLoading: false,
          error: payload.error
      };

    case GET_PERMISSIONS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_PERMISSIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
          permissions: payload,
          error: null,
      };

    case GET_PERMISSIONS_ERROR:
      return {
        ...state,
        isLoading: false,
          error: payload.error
      };
    case UPDATE_PERMISSION_START:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_PERMISSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
          permissions: payload,
          error: null,
      };

    case UPDATE_PERMISSION_FAILURE:
      return {
        ...state,
        isLoading: false,
          error: payload.error
      };
    case DELETE_PERMISSION_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_PERMISSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
          permissions: payload,
          error: null,
      };

    case DELETE_PERMISSION_FAILURE:
      return {
        isLoading: false,
          error: payload.error
      };
    default:
      return state;
  }
};

export default PermissionReducer;
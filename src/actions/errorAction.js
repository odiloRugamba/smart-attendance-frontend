import * as types from "./actionTypes";

export function networkError(error) {
  return {
    type: types.NETWORK_ERROR,
    errors: error
  };
}

export function serverError(error) {

  return {
    type: types.SERVER_ERROR,
    errors: error.data
  };
}

export  default function handleError(error) {

  return function(dispatch) {
    error.response
      ? dispatch(serverError(error.response))
      : dispatch(networkError(error));
  };
}

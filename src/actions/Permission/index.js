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
  DELETE_PERMISSION_FAILURE
} from '../actionTypes';

import HttpService from '../../utils/HttpService';
import creator from '../creator';

export const getPermissions = (data) => async (dispatch) => {
  try {
    await dispatch(creator(GET_PERMISSIONS_START, true))
    const response = await HttpService.get('/permissions', data);
    await dispatch(creator(GET_PERMISSIONS_SUCCESS, response));
  } catch (error) {
    return dispatch(creator(GET_PERMISSIONS_ERROR, error));
  }
};

export const createPermission = (data) => async (dispatch) => {
  try {
    console.log("submiting...[action]")
    await dispatch(creator(CREATE_PERMISSION_START, true))
    const response = await HttpService.post('/permissions', data);
    await dispatch(creator(CREATE_PERMISSION_SUCCESS, response));
  } catch (error) {
    return dispatch(creator(CREATE_PERMISSION_FAILURE, error));
  }
};

export const updatePermission = (data) => async (dispatch) => {
  try {
    await dispatch(creator(UPDATE_PERMISSION_START, true))
    const response = await HttpService.put('/permissions', data);
    await dispatch(creator(UPDATE_PERMISSION_SUCCESS, response));
  } catch (error) {
    return dispatch(creator(UPDATE_PERMISSION_FAILURE, error));
  }
};

export const deletePermission = (data) => async (dispatch) => {
  try {
    await dispatch(creator(DELETE_PERMISSION_START, true))
    const response = await HttpService.delete('/permissions', data);
    await dispatch(creator(DELETE_PERMISSION_SUCCESS, response));
  } catch (error) {
    return dispatch(creator(DELETE_PERMISSION_FAILURE, error));
  }
};

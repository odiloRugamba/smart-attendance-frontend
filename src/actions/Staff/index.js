import { toast } from 'react-toastify';
import { ADD_STAFF_START, ADD_STAFF_SUCCESS, ADD_STAFF_ERROR, GET_STAFFS_ERROR, GET_STAFFS_START, GET_STAFFS_SUCCESS, GET_SCHOOLS_START } from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import creator from '../creator';

export const AddStaffAction = (data) => async (dispatch) => {
  try {
    await dispatch(creator(ADD_STAFF_START, true))

    const response = await HttpService.post('/staffs', data);
    await dispatch(creator(ADD_STAFF_SUCCESS, response));
  } catch (error) {
      console.log(error.response);
    return dispatch(creator(ADD_STAFF_ERROR, error));
  }
};


export const GetAllStaffs = (id) => async (dispatch) => {
  try {
    await dispatch(creator(GET_SCHOOLS_START, true))
    
    const response = await HttpService.get(`/staffs/${id}`);
    await dispatch(creator(GET_STAFFS_SUCCESS, response.data));
  } catch (error) {
    return dispatch(creator(GET_STAFFS_ERROR, error));
  }
};
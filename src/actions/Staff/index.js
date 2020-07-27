import { toast } from 'react-toastify';
import { ADD_STAFF_START, ADD_STAFF_SUCCESS, ADD_STAFF_ERROR } from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import creator from '../creator';

export const AddStaffAction = (data) => async (dispatch) => {
  try {
    await dispatch(creator(ADD_STAFF_START, true))

    const response = await HttpService.post('/staffs', data);
    await dispatch(creator(ADD_STAFF_SUCCESS, response));
    toast.success(`${response.message}`, {
      position: toast.POSITION.TOP_CENTER
    });
  } catch (error) {
      console.log(error.response);
    //   if(error.response.data.message.error){
    //     toast.error(`${error.response.data.message.error}`, {
    //       position: toast.POSITION.TOP_CENTER
    //     });
    //   }
    return dispatch(creator(ADD_STAFF_ERROR, error));
  }
};

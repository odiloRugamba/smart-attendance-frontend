import { toast } from 'react-toastify';
import { ADD_SCHOOL_SUCCESS, ADD_SCHOOL_FAILURE } from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import creator from '../creator';

export const AddSchoolAction = (data) => async (dispatch) => {
  try {
    
    console.log(data);
    const response = await HttpService.post('/schools', data);
    await dispatch(creator(ADD_SCHOOL_SUCCESS, response));
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
    return dispatch(creator(ADD_SCHOOL_FAILURE, error));
  }
};

import { toast } from 'react-toastify';
import { ADD_SCHOOL_SUCCESS, ADD_SCHOOL_FAILURE, GET_SCHOOLS_START, GET_SCHOOLS_SUCCESS, GET_SCHOOLS_ERROR} from '../actionTypes';
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

export const GetAllSchools = () => async (dispatch) => {
  try {
    await dispatch(creator(GET_SCHOOLS_START, true))
    
    const response = await HttpService.get('/schools');
    await dispatch(creator(GET_SCHOOLS_SUCCESS, response.data));
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
    return dispatch(creator(GET_SCHOOLS_ERROR, error));
  }
};
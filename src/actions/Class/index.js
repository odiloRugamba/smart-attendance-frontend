import { toast } from 'react-toastify';
import { ADD_CLASS_SUCCESS, ADD_CLASS_ERROR, ADD_CLASS_START, GET_CLASSES_START, GET_CLASSES_SUCCESS, GET_CLASSES_ERROR,
UPDATE_CLASS_START, UPDATE_CLASS_SUCCESS, UPDATE_CLASS_FAILURE, GET_STUDENTS_START, GET_STUDENTS_SUCCESS, GET_STUDENTS_ERROR
} from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import history from '../../utils/helpers/history';
import creator from '../creator';

export const AddClassAction = (data) => async (dispatch) => {
  try {
    await dispatch(creator(ADD_CLASS_START, true));
    console.log(data);
    const response = await HttpService.post('/classes', data);
    await dispatch(creator(ADD_CLASS_SUCCESS, response.data));
    toast.success(`${response.message}`, {
      position: toast.POSITION.TOP_CENTER
    });
    history.push('/all-classes');
    window.location.replace("/all-classes");
  } catch (error) {
      console.log(error.response);
      if(error.response.data.message.error){
        toast.error(`${error.response.data.message.error}`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    return dispatch(creator(ADD_CLASS_ERROR, error));
  }
};

export const GetAllClassess = (id) => async (dispatch) => {
  try {
    await dispatch(creator(GET_CLASSES_START, true))
    
    const response = await HttpService.get(`/classes/${id}`);
    console.log("resp:", response.data);
    await dispatch(creator(GET_CLASSES_SUCCESS, response.data));
    // toast.success(`${response.message}`, {
    //   position: toast.POSITION.TOP_CENTER
    // });
  } catch (error) {
      console.log(error.response);
    //   if(error.response.data.message.error){
    //     toast.error(`${error.response.data.message.error}`, {
    //       position: toast.POSITION.TOP_CENTER
    //     });
    //   }
    return dispatch(creator(GET_CLASSES_ERROR, error));
  }
};

export const GetAllStudents = (id) => async (dispatch) => {
  try {
    await dispatch(creator(GET_STUDENTS_START, true))
    
    const response = await HttpService.get(`/classes/${id}/students`);
    console.log("resp:", response.data);
    await dispatch(creator(GET_STUDENTS_SUCCESS, response.data));
    // toast.success(`${response.message}`, {
    //   position: toast.POSITION.TOP_CENTER
    // });
  } catch (error) {
      console.log(error.response);
    //   if(error.response.data.message.error){
    //     toast.error(`${error.response.data.message.error}`, {
    //       position: toast.POSITION.TOP_CENTER
    //     });
    //   }
    return dispatch(creator(GET_STUDENTS_ERROR, error));
  }
};
export const UpdateClass = (id) => async (dispatch) => {
  try {
    await dispatch(creator(UPDATE_CLASS_START, true))
    
    const response = await HttpService.update(`/schools/${id}`);
    console.log(response);
    await dispatch(creator(UPDATE_CLASS_SUCCESS, response.data));
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
    return dispatch(creator(UPDATE_CLASS_FAILURE, error));
  }
};
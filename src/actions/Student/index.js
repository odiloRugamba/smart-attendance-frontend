import { toast } from 'react-toastify';
import { ADD_STUDENT_SUCCESS, ADD_STUDENT_ERROR, ADD_STUDENT_START} from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import history from '../../utils/helpers/history';
import creator from '../creator';

export const AddStudentAction = (data) => async (dispatch) => {
  try {
    await dispatch(creator(ADD_STUDENT_START, true));
    console.log(data);
    const response = await HttpService.post('/students', data);
    await dispatch(creator(ADD_STUDENT_SUCCESS, response));
    history.push('/all-students');
    window.location.replace("/all-students");
  } catch (error) {
      console.log(error.response);
      if(error.response.data.message.error){
        toast.error(`${error.response.data.message.error}`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    return dispatch(creator(ADD_STUDENT_ERROR, error));
  }
};


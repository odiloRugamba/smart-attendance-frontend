import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_CURRENT_USER } from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import creator from '../creator';

export const loginAction = (data) => async (dispatch) => {
  try {
    const { email, password } = data;
    
    const response = await HttpService.post('/auth/login', {
      email,
      password,
    });
    
    localStorage.setItem('golden_token', response.data.token);
    const info = jwtDecode(response.data.token)
    await dispatch(creator(SET_CURRENT_USER, info));
    await dispatch(creator(LOGIN_SUCCESS, response));
    toast.success(`${response.message}`);
    window.location.replace("/dashboard");
  } catch (error) {
      if(error.response.data.message.error){
        toast.error(`${error.response.data.message.error}`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    return dispatch(creator(LOGIN_FAILURE, error));
  }
};

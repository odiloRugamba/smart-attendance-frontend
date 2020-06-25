import { toast } from 'react-toastify';
import { SIGN_UP_START, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actionTypes';
import  {API}  from '../../utils/API';
import creator from '../creator';

export const SignupUser = (data) => async (dispatch) => {
    try {
      dispatch(creator(SIGN_UP_START))
      const response = await API.post('/auth/signup', data);
      toast.success('You are successfully registered, verify your email');
      return dispatch(creator(SIGNUP_SUCCESS, response.data));
    } catch (error) {
      toast.error(error.response.data.message,{
        position: toast.POSITION.TOP_CENTER
      });
      return dispatch(creator(SIGNUP_ERROR, error));
    }
  };
import { toast } from 'react-toastify';
import history from '../../utils/helpers/history'
import { FORGOT_PASSWORD_START, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR } from '../actionTypes';
import  {API}  from '../../utils/API';
import creator from '../creator';

export const ForgetPasswordAction = (data) => async (dispatch) => {
    try {
      dispatch(creator(FORGOT_PASSWORD_START, true))
      const response = await API.post('/auth/forget', data);
      toast.success('We have sent a reset link to your email');
      return dispatch(creator(FORGOT_PASSWORD_SUCCESS, response.data));
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message,{
          position: toast.POSITION.TOP_CENTER
        });
        return dispatch(creator(FORGOT_PASSWORD_ERROR, error.response.data));
      }
    }
  };

export const ResetPasswordAction = (data) => async (dispatch) => {
    try {
      dispatch(creator(FORGOT_PASSWORD_START, true))
      const response = await API.patch(`/auth/reset/${data.email}/${data.token}`, data);
      toast.success('You have successfully updated your password');
      await dispatch(creator(FORGOT_PASSWORD_SUCCESS, response.data));
      history.push('/login')
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message,{
          position: toast.POSITION.TOP_CENTER
        });
        return dispatch(creator(FORGOT_PASSWORD_ERROR, error.response.data));
      }
    }
  };
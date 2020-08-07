import { toast } from 'react-toastify';
import { 
  ADD_SCHOOL_SUCCESS,
  ADD_SCHOOL_FAILURE,
  GET_SCHOOLS_START,
  GET_SCHOOLS_SUCCESS,
  GET_SCHOOLS_ERROR,
  GET_SCHOOL_START,
  GET_SCHOOL_ERROR,
  GET_SCHOOL_SUCCESS,
  UPDATE_SCHOOL_START,
  UPDATE_SCHOOL_SUCCESS,
  UPDATE_SCHOOL_FAILURE,
  DELETE_SCHOOL_START,
  DELETE_SCHOOL_SUCCESS,
  DELETE_FAILURE,
  ONCHANGE_SCHOOL_SUCCESS,
    } from '../actionTypes';
import  HttpService  from '../../utils/HttpService';
import creator from '../creator';

export const AddSchoolAction = (data) => async (dispatch) => {
  try {
    
    console.log(data);
    const response = await HttpService.post('/schools', data);
    await dispatch(creator(ADD_SCHOOL_SUCCESS, response));
  } catch (error) {
      console.log(error.response);
      if(error.response.data.message.error){
        toast.error(`${error.response.data.message.error}`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    return dispatch(creator(ADD_SCHOOL_FAILURE, error));
  }
};

export const GetAllSchools = () => async (dispatch) => {
  try {
    await dispatch(creator(GET_SCHOOLS_START, true))
    
    const response = await HttpService.get('/schools');
    console.log(response.data);
    await dispatch(creator(GET_SCHOOLS_SUCCESS, response.data));
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
    return dispatch(creator(GET_SCHOOLS_ERROR, error));
  }
};

export const GetSinglechool = (id) => async (dispatch) => {
  try {
    await dispatch(creator(GET_SCHOOL_START, true))
    
    const response = await HttpService.get(`/schools/${id}`);
    console.log(response);
    await dispatch(creator(GET_SCHOOL_SUCCESS, response.data));
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
    return dispatch(creator(GET_SCHOOL_ERROR, error));
  }
};

export const UpdateSchool = (id) => async (dispatch) => {
  try {
    await dispatch(creator(UPDATE_SCHOOL_START, true))
    
    const response = await HttpService.update(`/schools/${id}`);
    console.log(response);
    await dispatch(creator(UPDATE_SCHOOL_SUCCESS, response.data));
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
    return dispatch(creator(UPDATE_SCHOOL_FAILURE, error));
  }
};

export const onChangeSchool = (name, value) => async (dispatch) => {
  try {
    await dispatch(creator(UPDATE_SCHOOL_START, true))
    
    await dispatch(creator(ONCHANGE_SCHOOL_SUCCESS, {name, value}));

  } catch (error) {
      console.log(error.response);
    return dispatch(creator(UPDATE_SCHOOL_FAILURE, error));
  }
};

export const DeleteSchool = (id) => async (dispatch) => {
  try {
    await dispatch(creator(DELETE_SCHOOL_START, true))
    
    const response = await HttpService.delete(`/schools/${id}`);
    await dispatch(creator(DELETE_SCHOOL_SUCCESS, response.data));
    toast.success(`${response.message}`, {
      position: toast.POSITION.TOP_CENTER
    });
  } catch (error) {
      // console.log(error.response);
      // if(error.response.data.message.error){
      //   toast.error(`${error.response.data.message.error}`, {
      //     position: toast.POSITION.TOP_CENTER
      //   });
      // }
    return dispatch(creator(DELETE_FAILURE, error));
  }
};
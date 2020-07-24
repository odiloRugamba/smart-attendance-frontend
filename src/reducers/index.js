import { combineReducers } from 'redux';
import loginReducer from './Authentication/LoginReducer';
import SignupReducer from './Authentication/SignupReducer'
import ThemeOptions from './Theme/ThemeOptions';
import ForgotPasswordReducer from './Authentication/ForgotPassword';
import SchoolReducer from './School'
import Staff from './Staff/addstaff'

const  rootReducer = combineReducers({
  auth: loginReducer,
  SignupReducer,
  ThemeOptions,
  ForgotPasswordReducer,
  School: SchoolReducer,
  Staff,
});

export default rootReducer;

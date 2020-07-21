import { combineReducers } from 'redux';
import loginReducer from './Authentication/LoginReducer';
import SignupReducer from './Authentication/SignupReducer'
import ThemeOptions from './Theme/ThemeOptions';
import ForgotPasswordReducer from './Authentication/ForgotPassword'

const  rootReducer = combineReducers({
  auth: loginReducer,
  SignupReducer,
  ThemeOptions,
  ForgotPasswordReducer,
});

export default rootReducer;

import React, {useState} from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import qs from 'qs';
import { toast } from 'react-toastify';
import { ResetPasswordAction } from '../../actions/Authentication/ForgetPassword';
import { Col,Button } from 'reactstrap';


     function ResetPassword(props) {
        const [password, setPassword] = useState('');
        const [confirmPassword, setconfirmPassword] = useState('');
   
       const  handleSubmit = (e) =>{
         e.preventDefault();
         const { email, token } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
         if(password === '') return toast.error('Password should not be empty');
         if(password !== confirmPassword) return toast.error('Password does not match');
         props.resetMyPassword({confirmPassword, password, email, token})
        }

    return (
        <>
            <div className="app-wrapper bg-white min-vh-100">
                <div className="app-main min-vh-100">
                    <div className="app-content p-0">
                        <div className="app-content--inner d-flex align-items-center">
                            <div className="flex-grow-1 w-100 d-flex align-items-center">
                                <div className="bg-composed-wrapper--content py-5">
                                    <Col md="10" lg="8" xl="4" className="mx-auto">
                                        <div className="text-center">
                                            <h1 className="display-4 mb-4 font-weight-bold">
                                                 Welcome to SMART GATE APP
                                                    </h1>
                                            <p className="font-size-lg mb-2 text-black-50">
                                                Fill in the fields below to set your password
                                                    </p>
                                        </div>
                                        <div>
                                        <AvForm>
                                            <AvField name="password"  label="Password" onChange={(e) => setPassword(e.target.value)} type="password" validate={{
                                                required: {value: true, errorMessage: 'Please enter a password'},
                                                pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
                                                maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 16 characters'}
                                            }} />
                                            <AvField name="password"  label="Repeat Password" onChange={(e) => setconfirmPassword(e.target.value)} type="password" validate={{
                                                required: {value: true, errorMessage: 'Please repeat a password'},
                                                pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
                                                maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 16 characters'}
                                            }} />
                                            
                                            <Button size="lg" block={true} color="primary" onClick={handleSubmit}>{props.isLoading ? 'Loading...' : 'Set new Password'}</Button>
                                            </AvForm>

                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapState = ({ ForgotPasswordReducer }) => ({
    isLoading: ForgotPasswordReducer.isLoading,
    error: ForgotPasswordReducer.error,
});
export default connect(mapState, {
    resetMyPassword: ResetPasswordAction
})(ResetPassword);
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Col,Button } from 'reactstrap';
import { loginAction } from '../../actions/Authentication/Login';


function Login(props) {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
   
       const  handleSubmit = async (e) =>{
         e.preventDefault();
         const { UserLogin } = props;
         await  UserLogin({email, password})
        }
        console.log(props.isAuthenticated.user.role);
        
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
                                            <h1 className="display-4 mb-1 font-weight-bold">
                                                Login
                                                    </h1>
                                            <p className="font-size-lg mb-0 text-black-50">
                                                Fill in the fields below to login to your account
                                                    </p>
                                        </div>
                                        <div className="text-center text-black-50 mb-4">
                                            or sign in with credentials
                                                </div>
                                        <div>
                                        <AvForm>
                                                        <AvField name="email" placeholder="Enter email" label="Email" onChange={(e) => setEmail(e.target.value)} type="email" errorMessage="Invalid email" validate={{
                                                            required: {value: true},
                                                            pattern: {value: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'},
                                                            maxLength: {value: 32}
                                                        }} />
                                                        <AvField name="password" placeholder="Enter password"  label="Password" onChange={(e) => setPassword(e.target.value)} type="password" validate={{
                                                            required: {value: true, errorMessage: 'Please enter a password'},
                                                            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
                                                            maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 16 characters'}
                                                        }} />
                                                         <div className="d-flex justify-content-between">
                                                
                                                <div>
                                                    <a href="/forget-password"  className="text-first">Recover password</a>
                                                </div>
                                            </div>
                                            <div className="text-center py-4">
                                                <Button size="lg" block={true} color="second" onClick={handleSubmit}>Login</Button>
                                                </div>
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
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth
    }
}

export default connect(mapStateToProps, {
    UserLogin: loginAction
})(Login);
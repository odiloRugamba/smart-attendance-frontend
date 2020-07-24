import React, {useState} from 'react';
import {connect} from 'react-redux'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Col,Row , Button } from 'reactstrap';
import { ForgetPasswordAction } from '../../actions/Authentication/ForgetPassword'

function ForgetPassword(props) {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const { PostEmail } = props;
        await PostEmail({email})      
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
                                            <h1 className="display-4 mb-2 font-weight-bold">
                                                Forget Password
                                                    </h1>
                                            <p className="font-size-lg mb-2 text-black-50">
                                                Fill in the fields below to login to your account
                                                    </p>
                                        </div>
                                        <AvForm >
                                                  <Row className="no-gutters">
                                                      <Col sm="12" lg="8" className="mt-3 px-2">
                                                        <AvField name="email" className="form-control form-control-lg" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} type="email" errorMessage="Invalid email" validate={{
                                                            required: {value: true, errorMessage: 'Please enter a email'},
                                                            pattern: {value: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'},
                                                            maxLength: {value: 32, errorMessage: 'Your email address must be between 6 and 32 characters'}
                                                        }} />
                                                      </Col>
                                                      <Col sm="12" lg="4" className="mt-3 px-2">
                                                          <Button className="d-block shadow-none w-100" size="lg" color="warning" onClick={handlePasswordReset}>
                                                              <span className="btn-wrapper--label">
                                                                  Reset
                                          </span>
                                                          </Button>
                                                      </Col>
                                                  </Row>
                                                  </AvForm>
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

const mapDispatchToProps = dispatch => ({
    PostEmail: data => {
      dispatch(ForgetPasswordAction(data));
    },
  });
export default connect(null, mapDispatchToProps)(ForgetPassword);
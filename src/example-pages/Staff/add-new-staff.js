import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { AddStaffAction } from '../../actions/Staff'


 function AddStaff(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [schoolId, setSchoolId] = useState(2);

    const  handleSubmit = async (e) =>{
        e.preventDefault();
        
        const { Staff } = props;
        console.log(Staff);
        await  Staff({
            firstName,
            lastName,
            email,
            phone,
            role,
            schoolId
        })
       }
  return (
      <>
       <PageTitle
      titleHeading="Add new staff"
      titleDescription="Do something that is meaninful"
      />
          <div className="app-wrapper bg-white min-vh-100">
              <div className="app-main min-vh-100">
              <Form>
              <Container>
                  
                        <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">User registration Form</div>
                        <div className="py-4">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">First Name</Label>
                                        <Input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Email</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="email" onChange={(e) => setEmail(e.target.value)} id="" placeholder="email..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Last Name</Label>
                                        <Input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} id="" placeholder="Last name ..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Mobile phone</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} id="" placeholder="Number..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label className="font-weight-bold"  for="">Role</Label>
                                    <Row>
                                     <Col md="12">
                                        <FormGroup>
                                            {/* 'HEAD','DISCIPLINE','DOS','TEACHER' */}
                                        <Input type="select" name="role" onChange={(e) => setRole(e.target.value)} id="exampleSelect">
                                            <option value="DOS">DOS</option>
                                            <option value="DISCIPLINE">DISCIPLINE</option>
                                            <option value="TEACHER">TEACHER</option>
                                        </Input>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <Container className="d-flex align-items-center ">
                        <div className="py-4">
                            <Button color="success" onClick={handleSubmit} size="lg" className="font-weight-bold">
                                Save staff
                            </Button>
                        </div>
                    </Container>
                    </Form>
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
    Staff: AddStaffAction
})(AddStaff);
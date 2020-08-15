import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import {AddSchoolAction} from '../../actions/School'
import { createPermission } from 'actions/Permission';

  function CreatePermission(props) {

    const [leavingTime, setleavingTime] = useState('');
    const [expectedBackTime, setexpectedBackTime] = useState('');
    const [reason, setreason] = useState('');
    const [requesterName, setrequesterName] = useState('');
    const [requesterPhone, setrequesterPhone] = useState('');
    const [requesterRelationship, setrequesterRelationship] = useState('');
    const [studentId, setstudentId] = useState('1');
    const [schoolId, setschoolId] = useState('1');
   
   const  handleSubmit = async (e) =>{
       console.log("submit...")
     e.preventDefault();
     const { createPermission } = props;
     await  createPermission({
         leavingTime,
         expectedBackTime,
         reason,
         requesterName,
         requesterPhone,
         studentId,
         requesterRelationship,
         schoolId,
     });
     console.log("submited")
     console.log(leavingTime);
    }
  return (
      <>
          <div className="app-wrapper bg-white min-vh-100">
              <div className="app-main min-vh-100">
              <Form>
              <Container>
                  
                        <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">Issue a new permission</div>
                        <div className="py-4">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">leaving time</Label>
                                        <Input type="date" name="leavingTime" onChange={(e) => setleavingTime(e.target.value)} id="" />
                                    </FormGroup>
                                    </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Expected return time</Label>
                                        <Input type="date" name="expectedBackTime" onChange={(e) => setexpectedBackTime(e.target.value)} id="" />
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Reason</Label>
                                        <Input type="textarea" name="reason" onChange={(e) => setreason(e.target.value)} id="" placeholder="Reason..." />
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <Label className="font-weight-bold" for="">Requester name</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="requesterName" onChange={(e) => setrequesterName(e.target.value)} id="" placeholder="Full name..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Requester phone number</Label>
                                        <Input type="text" name="requesterPhone" id="" onChange={(e) => setrequesterPhone(e.target.value)} placeholder="07..." />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Requester relationship with the student</Label>
                                        <Input type="text" name="requesterPhone" id="" onChange={(e) => setrequesterRelationship(e.target.value)} placeholder="Mother..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="divider mb-4" />
                    <Container className="d-flex align-items-center ">
                        <div className="py-4">
                            <Button color="success" onClick={handleSubmit} size="lg" className="font-weight-bold">
                                Submit
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
    createPermission: createPermission
})(CreatePermission);
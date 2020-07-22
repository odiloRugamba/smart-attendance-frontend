import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import {AddSchoolAction} from '../../actions/School/addSchool'

  function AddSchool(props) {

    const [headFirstName, setheadFirstName] = useState('');
    const [headLastName, setheadLastName] = useState('');
    const [headEmail, setHeadEmail] = useState('');
    const [headPhone, setheadPhone] = useState('');
    const [schoolName, setschoolName] = useState('');
    const [schoolPhone, setschoolPhone] = useState('');
    const [schoolEmail, setschoolEmail] = useState('');
    const [schoolAddress, setschoolAddress] = useState('');
    const [villageId, setSchoolvillageId] = useState('');

   const  handleSubmit = async (e) =>{
     e.preventDefault();
     const { School } = props;
     await  School({
         headFirstName,
         headLastName,
         headEmail,
         headPhone,
         schoolName,
         schoolEmail,
         schoolPhone,
         schoolAddress,
         villageId,
     })
    }

  return (
      <>
       <PageTitle
      titleHeading="School registration Form"
      titleDescription="Do something that is meaninful"
      />
          <div className="app-wrapper bg-white min-vh-100">
              <div className="app-main min-vh-100">
              <Form>
              <Container>
                  
                        <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">School registration Form</div>
                        <div className="py-4">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Headmaster FirstName</Label>
                                        <Input type="text" name="headFirstName" onChange={(e) => setheadFirstName(e.target.value)} id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Headmaster LastName</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="headLastName" onChange={(e) => setheadLastName(e.target.value)} id="" placeholder="last name..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Headmaster Email</Label>
                                        <Input type="text" name="headEmail" onChange={(e) => setHeadEmail(e.target.value)} id="" placeholder="Last name ..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Mobile phone</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="headPhone" onChange={(e) => setheadPhone(e.target.value)} id="" placeholder="Number..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">School Name</Label>
                                        <Input type="text" name="schoolName" id="" onChange={(e) => setschoolName(e.target.value)} placeholder="school name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">School Email</Label>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input type="text" name="schoolEmail" onChange={(e) => setschoolEmail(e.target.value)} id="" placeholder="school email..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <Label className="font-weight-bold" for="">Village</Label>
                                    <Row>
                                     <Col md="12">
                                        <FormGroup>
                                        <Input type="select" name="villageId" onChange={(e) => setSchoolvillageId(e.target.value)} id="exampleSelect">
                                            <option value="1">kayonza</option>
                                            <option value="2">Ijyosi</option>
                                            <option  value="3">Mukanogo</option>
                                        </Input>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">School Phone Number</Label>
                                        <Input type="text" name="schoolName" id="" onChange={(e) => setschoolPhone(e.target.value)} placeholder="school name..." />
                                    </FormGroup>
                                
                                </Col>
                            </Row>
                            <Label className="font-weight-bold" for="">School Address</Label>
                            <Row>
                                <Col col="12">
                                    <FormGroup>
                                        <Input type="text" name="schoolAddress" onChange={(e) => setschoolAddress(e.target.value)} id="" placeholder="school address..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="divider mb-4" />
                    <Container className="d-flex align-items-center ">
                        <div className="py-4">
                            <Button color="success" onClick={handleSubmit} size="lg" className="font-weight-bold">
                                Save school
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
    School: AddSchoolAction
})(AddSchool);
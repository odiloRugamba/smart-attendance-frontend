import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import JwtDecode from 'jwt-decode';
import { Row, Col, FormGroup, Input, Button, Label, Container } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { AddStudentAction } from '../../actions/Student'


function AddStudent(props) {

    const token = localStorage.getItem('smartgate_token');
  const {id} = JwtDecode(token).school
    const classId = props.match.params.id;
    const [firstName, setFirstName] = useState('');
    const [ lastName, setLastName] = useState('');
    const [ gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [disability, setDisability] = useState('');
    const [villageId, setVillageId] = useState("");
    const [schoolId, setschoolId] = useState(id);
    const [ enrollmentYear, setenrollmentYear] = useState('');
    const [guardianFirstName, setguardianFirstName] = useState('');
    const [ guardianLastName, setguardianLastName] = useState('');
    const [guardianPhone, setguardianPhone] = useState('');
    const [guardianEmail, setguardianEmail] = useState('');
    const [guardianRelationship, setguardianRelationship ] = useState('');

    const  handleSubmit = async (e) =>{
        e.preventDefault();
        
        const { Student } = props;
        // console.log(Student);
        const newStudent = {
            firstName,
            lastName,
            gender,
            dob,
            disability,
            classId,
            villageId,
            enrollmentYear,
            guardianEmail,
            guardianFirstName,
            guardianLastName,
            guardianPhone,
            guardianRelationship,
            schoolId
        };
        await  Student(newStudent)
       }

  return (
      <>
       <PageTitle
      titleHeading="Create new student"
      titleDescription="Do something that is meaninful"
      />
          <div className="app-wrapper bg-white min-vh-100">
              <div className="app-main min-vh-100">

              <Container>
                  <form></form>
                        <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">General</div>
                        <div className="py-4">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">First Name</Label>
                                        <Input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} id="firstName" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Birthday</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="date" name="dob" onChange={(e) => setDob(e.target.value)} id="" placeholder="Day..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Disability</Label>
                                        <Input type="text" name="disability" onChange={(e) => setDisability(e.target.value)} id="" placeholder="disability..." />
                                    </FormGroup>
                                    
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Last Name</Label>
                                        <Input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} id="" placeholder="Last name ..." />
                                    </FormGroup>
                                  
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Enlorment year</Label>
                                        <Input type="text" name="enrollmentYear" onChange={(e) => setenrollmentYear(e.target.value)} id="" placeholder="year..." />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label className="font-weight-bold" for="">Gender</Label>
                                    <Input type="select" name="gender" onChange={(e) => setGender(e.target.value)} id="exampleSelect">
                                        <option>select....</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </Input>
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Village</Label>
                                    <Input type="select" name="villageId" onChange={(e) => setVillageId(e.target.value)} id="exampleSelect">
                                        <option>select....</option>
                                        <option value="1">Ijyosi</option>
                                        <option value="2">Bukomane</option>
                                    </Input>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="divider mb-4" />
                    <Container>
                        <div className="text-uppercase font-weight-bold text-primary font-size-sm pb-4">Guardian/Parent Information</div>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Guardian FirstName</Label>
                                    <Input type="text" name="guardianFirstName" onChange={(e) => setguardianFirstName(e.target.value)} id="" placeholder="first name..." />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Guardian LastName</Label>
                                    <Input type="text" name="guardianLastName" onChange={(e) => setguardianLastName(e.target.value)} id="" placeholder="last name..." />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Guardian Phone</Label>
                                    <Input type="text" name="guardianPhone" onChange={(e) => setguardianPhone(e.target.value)} id="" placeholder="Phone number..." />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Guardian Email</Label>
                                    <Input type="text" name="guardianEmail" onChange={(e) => setguardianEmail(e.target.value)} id="" placeholder="email address..." />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                               {/* <br/> */}
                               <Label className="font-weight-bold" for="">Relationship</Label>
                                <Input type="select" name="guardianRelationship" onChange={(e) => setguardianRelationship(e.target.value)} id="exampleSelect">
                                        <option></option>
                                        <option value="Mother">Mother</option>
                                        <option value="Father">Father</option>
                                        <option value="Other">Other</option>
                                    </Input>
                            </Col>
                            {guardianRelationship === "Other" ? <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Specify</Label>
                                    <Input type="text" name="other" id="" placeholder="other..." />
                                </FormGroup>
                            </Col>: null}
                        </Row>
                    </Container>
                    <Container className="">
                        <div className="py-4">
                            <Button color="success" onClick={handleSubmit} size="lg" className="font-weight-bold">
                                Save details
                            </Button>
                        </div>
                    </Container>
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
    Student: AddStudentAction
})(AddStudent);
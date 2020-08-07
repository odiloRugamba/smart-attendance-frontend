import React, {useState} from 'react';
import { connect } from 'react-redux';
import JwtDecode from 'jwt-decode';
import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { AddClassAction } from '../../actions/Class'


 function AddClass(props) {

    
  const token = localStorage.getItem('smartgate_token');
  const {id} = JwtDecode(token).school

    const [level, setLevel] = useState('');
    const [year, setYear] = useState('');
    const [combination, setCombination] = useState('');
    const [label, setLabel] = useState('');
    const schoolId = id;

    const  handleSubmit = async (e) =>{
        e.preventDefault();
        
        const { Class } = props;
        console.log(Class);
        await  Class({
            level,
            year,
            combination,
            label,
            schoolId
        })
       }
  return (
      <>
       <PageTitle
      titleHeading="Add new class"
      titleDescription="Do something that is meaninful"
      />
          <div className="app-wrapper bg-white min-vh-100">
              <div className="app-main min-vh-100">
              <Form>
              <Container>
                  
                        <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">New class registration Form</div>
                        <div className="py-4">
                            <Row>
                            <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Year</Label>
                                        <Input type="select" name="year" onChange={(e) => setYear(e.target.value)} id="exampleSelect">
                                            <option></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <Label className="font-weight-bold"  for="">Level</Label>
                                    <Input type="select" name="combination" onChange={(e) => setLevel(e.target.value)} id="exampleSelect">
                                            <option></option>
                                            <option value="Primary">Primary Level</option>
                                            <option value="Ordinary">Ordinary Level</option>
                                            <option value="Advanced">Advanced Level</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                     <Row>{level === "Primary" || level === "Ordinary"? null: 
                                <Col md="6">
                                    <Label className="font-weight-bold"  for="">combination</Label>
                                    <Row>
                                     <Col md="12">
                                        <FormGroup>
                                            {/* 'HEAD','MPC','PCM','PCB' */}
                                        <Input type="select" name="combination" onChange={(e) => setCombination(e.target.value)} id="exampleSelect">
                                            <option></option>
                                            <option value="PCM">PCM</option>
                                            <option value="MPC">MPC</option>
                                            <option value="PCB">PCB</option>
                                            <option value="MCB">MCB</option>
                                            <option value="EKK">EKK</option>
                                            <option value="EFK">EFK</option>
                                            <option value="MEG">MEG</option>
                                            <option value="HEG">HEG</option>
                                            <option value="MCE">MCE</option>
                                        </Input>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                }
                                <Col md="6">
                                    <FormGroup>
                                    <Label className="font-weight-bold"  for="">Label</Label>
                                    <Input type="text" name="label" onChange={(e) => setLabel(e.target.value)} placeholder="eg. a, b, c etc..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <Container className="d-flex align-items-center ">
                        <div className="py-4">
                            <Button color="success" onClick={handleSubmit} size="lg" className="font-weight-bold">
                                Save Class
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
    Class: AddClassAction
})(AddClass);
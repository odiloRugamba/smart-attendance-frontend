import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { GetSinglechool, UpdateSchool, onChangeSchool } from '../../actions/School';

 function UpdateSchoolPage(props) {
    const { school } = props;

    console.log("ddddddddd", school);
    const [schoolName, setschoolName] = useState('');
    const [schoolPhone, setschoolPhone] = useState('');
    const [schoolEmail, setschoolEmail] = useState('');
    const [schoolAddress, setschoolAddress] = useState('');
    const [villageId, setSchoolvillageId] = useState('');

    const  handleSubmit =  (e) =>
    {
        e.preventDefault();
        const { Update } = props;
        console.log('name', schoolName);
          Update({
            schoolName,
            schoolEmail,
            schoolPhone,
            schoolAddress,
            villageId,
        })
       }
       
       const {id} = props.match.params;
       useEffect(() => {
        const { School } = props;
        School(id);
     }, [id]);


    //  const handleChange = (e) =>{
    //     setschoolNames(e.target.value)
    //  }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        props.changeHandler(name, value);
    }

    const updated = props.updatedSchool;
    console.log('myTest', props.updatedSchool);
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
                                     <Label className="font-weight-bold" for="">School Name</Label>
                                     <Input type="text" name="schoolName" id="" defaultValue={updated.schoolName} onChange={(e) =>changeHandler(e)} placeholder="school name..." />
                                 </FormGroup>
                                 <Label className="font-weight-bold" for="">School Email</Label>
                                 <Row>
                                     <Col>
                                         <FormGroup>
                                             <Input type="text" name="schoolEmail"  defaultValue={updated.schoolEmail} onChange={(e) =>changeHandler(e)} id="" placeholder="school email..." />
                                         </FormGroup>
                                     </Col>
                                 </Row>
                             </Col>
                             <Col md="6">
                                 <Label className="font-weight-bold" for="">Village</Label>
                                 <Row>
                                  <Col md="12">
                                     <FormGroup>
                                     <Input type="select" name="villageId" defaultValue="VIllage" onChange={(e) => setSchoolvillageId(e.target.value)} id="exampleSelect">
                                         <option value="1">kayonza</option>
                                         <option value="2">Ijyosi</option>
                                         <option  value="3">Mukanogo</option>
                                     </Input>
                                     </FormGroup>
                                     </Col>
                                 </Row>
                                 <FormGroup>
                                     <Label className="font-weight-bold" for="">School Phone Number</Label>
                                     <Input type="text" name="schoolName" defaultValue="0786638570" id="" onChange={(e) => setschoolPhone(e.target.value)} placeholder="school name..." />
                                 </FormGroup>
                             
                             </Col>
                         </Row>
                         <Label className="font-weight-bold" for="">School Address</Label>
                         <Row>
                             <Col col="12">
                                 <FormGroup>
                                     <Input type="text" name="schoolAddress" defaultValue='Kigai' onChange={(e) => setschoolAddress(e.target.value)} id="" placeholder="school address..." />
                                 </FormGroup>
                             </Col>
                         </Row>
                     </div>
                 </Container>
                 <div className="divider mb-4" />
                 <Container className="d-flex align-items-center ">
                     <div className="py-4">
                         <Button color="success" onClick={handleSubmit} size="lg" className="font-weight-bold">
                             Update school
                         </Button>
                     </div>
                 </Container>
                 </Form>
           </div>
       </div>
   </>
  );
}


const mapStateToProps = ({ School }) => ({
    updatedSchool: School.updatedSchools,
    school: School.school,
    isLoading: School.isLoading,
    error: School.error,
})


export default connect(mapStateToProps, {
    School: GetSinglechool,
    Update: UpdateSchool,
    changeHandler: onChangeSchool
})(UpdateSchoolPage);
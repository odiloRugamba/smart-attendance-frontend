import React from 'react';

import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';


export default function LivePreviewExample() {
  return (
      <>
       <PageTitle
      titleHeading="Add new user"
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
                                        <Label className="font-weight-bold" for="">headFirstName</Label>
                                        <Input type="text" name="" id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">headLastName</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Day..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">headEmail</Label>
                                        <Input type="text" name="" id="" placeholder="Last name ..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Mobile phone</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Number..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">schoolName</Label>
                                        <Input type="text" name="" id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">schoolName</Label>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input type="date" name="" id="" placeholder="day of birth..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <Label className="font-weight-bold" for="">Village</Label>
                                    <Row>
                                     <Col md="12">
                                        <FormGroup>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>Head</option>
                                            <option>Teacher</option>
                                            <option>parent</option>
                                        </Input>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">schoolName</Label>
                                        <Input type="text" name="" id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">schoolName</Label>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input type="date" name="" id="" placeholder="day of birth..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="divider mb-4" />
                    <Container>
                        <div className="text-uppercase font-weight-bold text-primary font-size-sm pb-4">Profile Image</div>
                        <Row>
                            <Col md="12">
                            <FormGroup>
                                <Label className="font-weight-bold" for="">Image</Label>
                                <Input type="file" name="" id="" placeholder="Last name ..." />
                             </FormGroup>
                            </Col>
                            
                        </Row>
                    </Container>
                    <Container className="d-flex align-items-center ">
                        <div className="py-4">
                            <Button color="success" size="lg" className="font-weight-bold">
                                Save details
                            </Button>
                        </div>
                    </Container>
                    </Form>
              </div>
          </div>
      </>
  );
}

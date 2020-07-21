import React from 'react';

import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';


export default function LivePreviewExample() {
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
                                        <Input type="text" name="" id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Headmaster LastName</Label>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="last name..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Headmaster Email</Label>
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
                                        <Label className="font-weight-bold" for="">School Name</Label>
                                        <Input type="text" name="" id="" placeholder="school name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">School Email</Label>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="school email..." />
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
                                    <Label className="font-weight-bold" for="">School Address</Label>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="school address..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="divider mb-4" />
                    <Container className="d-flex align-items-center ">
                        <div className="py-4">
                            <Button color="success" size="lg" className="font-weight-bold">
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

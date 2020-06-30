import React, { Fragment } from 'react';

import { Row, Col, FormGroup, Input, Button, Label, Container } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

export default function LivePreviewExample() {
  return (
      <>
       <PageTitle
      titleHeading="Create new staff"
      titleDescription="Do something that is meaninful"
      />
          <div className="app-wrapper bg-white min-vh-100">
              <div className="app-main min-vh-100">

              <Container>
                        <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">General</div>
                        <div className="py-4">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">First Name</Label>
                                        <Input type="text" name="" id="" placeholder="First name..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Birthday</Label>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Day..." />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Month..." />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Year..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label className="font-weight-bold" for="">Last Name</Label>
                                        <Input type="text" name="" id="" placeholder="Last name ..." />
                                    </FormGroup>
                                    <Label className="font-weight-bold" for="">Mobile phone</Label>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Area..." />
                                            </FormGroup>
                                        </Col>
                                        <Col md="8">
                                            <FormGroup>
                                                <Input type="text" name="" id="" placeholder="Number..." />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="divider mb-4" />
                    <Container>
                        <div className="text-uppercase font-weight-bold text-primary font-size-sm pb-4">Location</div>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Postal Code</Label>
                                    <Input type="text" name="" id="" placeholder="Postal code..." />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">Country</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>United Kingdom</option>
                                        <option>Spain</option>
                                        <option>Portugal</option>
                                        <option>China</option>
                                        <option>Germany</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label className="font-weight-bold" for="">City</Label>
                                    <Input type="text" name="" id="" placeholder="City..." />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label className="font-weight-bold" for="">Address</Label>
                            <Input type="textarea" name="" id="" />
                        </FormGroup>
                    </Container>
                    <div className="divider mt-5 mb-4" />
                    <Container className="d-flex align-items-center justify-content-end">
                        <div className="py-4">
                            <Button color="success" size="lg" className="font-weight-bold">
                                Save details
                            </Button>
                        </div>
                    </Container>
              </div>
          </div>
      </>
  );
}

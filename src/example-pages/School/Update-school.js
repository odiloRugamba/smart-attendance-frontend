import React from 'react';

import { Row, Col, FormGroup, Input, Button, Label, Container, Form } from 'reactstrap';
import { PageTitle } from '../../layout-components';


export default function LivePreviewExample() {
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
                                    <Label className="font-weight-bold" for="">Role</Label>
                                    <Row>
                                     <Col md="12">
                                        <FormGroup>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>staff</option>
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
                            <Button color="success" size="lg" className="font-weight-bold">
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

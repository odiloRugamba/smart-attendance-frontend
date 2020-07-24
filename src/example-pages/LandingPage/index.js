import React, { Fragment } from 'react';

import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-2.jpg';
import { Button, UncontrolledTooltip, Badge } from 'reactstrap';

const LandingPage = () => {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-skim-blue opacity-2" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Badge
                      pill
                      color="info"
                      className="px-4 text-uppercase h-auto py-1"
                      id="ProjVersion123">
                      Smart School Project
                    </Badge>
                    <UncontrolledTooltip
                      placement="top"
                      target="ProjVersion123">
                      Version: 1.1.0
                    </UncontrolledTooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Welcome to Smart gate project
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        With this system you can be able to navigate to some cool stuffs relating school and have access on some features
                      </p>
                      <p className="text-white font-size-lg">
                        Check out below links to be directed then do something amazing!
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          tag={Link}
                          to="/dashboard"
                          size="lg"
                          color="success"
                          className="d-block d-sm-inline-block"
                          title="View Bamburgh React Admin Dashboard with Reactstrap Free Live Preview">
                          <span className="btn-wrapper--label">Live Demo</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
           
                        <Button
                          tag="a"
                          href="/login"
                          size="lg"
                          color="first"
                          className="d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0"
                          title="Learn more about Bamburgh React Admin Dashboard with Reactstrap Free version">
                          <span className="btn-wrapper--label">
                          Login
                          </span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;

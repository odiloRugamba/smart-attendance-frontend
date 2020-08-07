import React, { Fragment, useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetAllSchools } from '../../../actions/School';
import { GetAllStaffs } from '../../../actions/Staff';
import { Row, Col, CardBody, Card } from 'reactstrap';

function LivePreviewExample(props) {
  useEffect(() => {
    const { Schools, Staffs } = props;
    console.log(Staffs);
    Schools();
    Staffs();
 }, []);
 const { schools, isLoading, staffs } = props;
 console.log("staffs:", staffs);
  return (
    <Fragment>
      <Row>
        <Col lg="3">
          <Card className="card-box bg-premium-dark border-0 text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Total Schools
                  </small>
                  <span className="font-size-xxl mt-1">{schools.length}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="card-box bg-midnight-bloom text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    New accounts
                  </small>
                  <span className="font-size-xxl mt-1">{staffs.length}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="card-box bg-plum-plate text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    New students
                  </small>
                  <span className="font-size-xxl mt-1">345</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="card-box bg-plum-plate text-light mb-5">
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    New staffs
                  </small>
                  <span className="font-size-xxl mt-1">345</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
    </Fragment>
  );
}

const mapStateToProps = ({ School, Staff }) => ({
    
  schools: School.schools,
  staffs: Staff.staffs,
  isLoading: School.isLoading,
  error: School.error,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    Schools: GetAllSchools,
    Staffs: GetAllStaffs
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(LivePreviewExample);
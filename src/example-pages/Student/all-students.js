import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import JwtDecode from 'jwt-decode';
import { Table, Card, Button,  } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AddStudentAction} from '../../actions/Student/index'

function GetAllStudent(props) {

    const token = localStorage.getItem('smartgate_token')
    const  {id}  = JwtDecode(token).school;

    useEffect(() => {
        const { Students } = props;
        console.log(Students);
        Students(id);
    })
  return (
      <>
      <PageTitle
      titleHeading="All Students"
      titleDescription="A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list."
      />
          <Card className="p-4 shadow-xxl mb-5">
              <div className="table-responsive-md">
                  <Table className="table-alternate-spaced">
                      <thead>
                      <tr>
                          <th scope="col" className="text-center">#</th>
                          <th style={{width: '400px'}} scope="col">Product</th>
                          <th scope="col">Client</th>
                          <th scope="col">Amount</th>
                          <th scope="col">VAT</th>
                          <th scope="col"></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td className="text-center text-black-50">
                              <span>
                                  #545
                              </span>
                          </td>
                          <td>
                              <b>
                                  Apple Macbook PRO
                              </b>
                              <span className="d-block text-black-50 font-size-sm">Lorem ipsum dolor sic amet</span>
                          </td>
                          <td>
                              <span>
                                  Rupert Bryan
                              </span>
                          </td>
                          <td className="font-size-lg font-weight-bold">
                              <small>$</small>
                              <span>
                                  2,495
                              </span>
                          </td>
                          <td className="text-warning">
                             <span>
                                  21%
                             </span>
                          </td>
                          <td className="text-right">
                              <Button color="neutral-first" className="rounded-sm text-uppercase font-size-xs font-weight-bold mr-4 py-0 shadow-none hover-scale-sm w-auto d-40">
                                  Pay Invoice
                              </Button>
                              <Button color="neutral-primary" className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                  <FontAwesomeIcon icon={['fas', 'search']} className="font-size-sm" />
                              </Button>
                              <Button color="neutral-first" className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                  <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
                              </Button>
                              <Button color="neutral-danger" className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                  <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
                              </Button>
                          </td>
                      </tr>
                      <tr className="divider"></tr>
                      </tbody>
                  </Table>
              </div>
          </Card>

      </>
  );
}

const mapStateToProps = ({ Student }) => ({
    
    students: Student.students,
    isLoading: Student.isLoading,
    error: Student.error,
})
// const mapDispatchToProps = dispatch => bindActionCreators({
//     Studentes: GetAllStudentess
// }, dispatch)

export default connect(mapStateToProps, null)(GetAllStudent);
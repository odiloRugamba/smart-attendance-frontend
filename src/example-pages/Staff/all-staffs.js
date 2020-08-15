import React, { useEffect } from 'react';
import JwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { Table, Card, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetAllStaffs } from '../../actions/Staff';

 function StaffPage(props) {
    const token = localStorage.getItem('smartgate_token')
    const  {id}  = JwtDecode(token).school;
    useEffect(() => {
        const { Staffs } = props;
        if(id === null){
            console.log("School Id must be provided:)");
        }else {
            Staffs(id);
        }
       
    }, [])

        const { staffs } = props;
        console.log("staffs", staffs);
        return (
            <>

                <Card className="card-box mb-5">
                    <div className="pt-4 px-4">
                        <Table responsive className="table-alternate-spaced mb-0">
                            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
                            <tr>
                                <th className="text-left px-4">No</th>
                                <th className="text-left">First name</th>
                                <th className="text-left">Last name</th>
                                <th className="text-left">Email</th>
                                <th className="text-left">Phone</th>
                                <th className="text-left">Role</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                           {
                               staffs.length > 0 ? staffs.map((staff, index) =>
                               <tr key={index}>
                               <td className="px-4">
                               {index+1}
                               </td>
                               <td className="text-left"> {staff.User.firstName} </td>
                               <td className="text-left"> {staff.User.lastName} </td>
                               <td className="text-left"> {staff.User.email} </td>
                               <td className="text-left"> {staff.User.phone} </td>
                               <td className="text-left"> {staff.role} </td>
                               <td className="text-center">
                                   <Button color="neutral-first" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                       <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
                                   </Button>
                                   <Button color="neutral-danger" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                       <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
                                   </Button>
                               </td>
                           </tr>
                               ) : <p>No data found in the table</p>
                           }
                            <tr className="divider"></tr>
                            
                            </tbody>
                        </Table>
                    </div>
                    <div className="mt-3" />
                    <div className="card-footer bg-secondary p-4 d-flex justify-content-center">
          
                    </div>
                </Card>
            </>
        );
    }

    
    const mapStateToProps = ({ Staff }) => ({
    
        staffs: Staff.staffs,
        isLoading: Staff.isLoading,
        error: Staff.error,
    })
    // const mapDispatchToProps = dispatch => bindActionCreators({
    //     Staffs: GetAllStaffs
    // }, dispatch)
    
    export default connect(mapStateToProps, {
        Staffs: GetAllStaffs   
    })(StaffPage);
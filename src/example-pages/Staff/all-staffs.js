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
        return (
            <>

                <Card className="card-box mb-5">
                    <div className="pt-4 px-4">
                        <Table responsive className="table-alternate-spaced mb-0">
                            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
                            <tr>
                                <th className="text-left px-4">No</th>
                                <th className="text-left">FirstNae</th>
                                <th className="text-left">LastName</th>
                                <th className="text-right">Email</th>
                                <th className="text-right">Phone</th>
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
                               <td className="text-left">
                                   <div>
                                       <div className="font-size-sm font-weight-bold">{staff.firstName}</div>
                                       <div className="font-size-sm opacity-7 text-success d-flex align-items-center">
                                           {staff.role}
                                       </div>
                                   </div>
                               </td>
                               <td className="text-right">
                                {staff.lastName}
                               </td>
                               <td className="text-right">
                                   <div className="font-size-sm font-weight-bold">{staff.createdAt}</div>
                               </td>
                               <td className="text-right">
                                   <div className="font-size-sm font-weight-bold">12.454539 BTC</div>
                                   <div className="font-size-sm opacity-7">26,349 USD</div>
                               </td>
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
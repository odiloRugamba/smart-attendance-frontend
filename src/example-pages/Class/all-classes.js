import React, { useEffect } from 'react';
import JwtDecode from 'jwt-decode';
import { bindActionCreators } from 'redux';
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import { Table, Card, Button, Spinner,Nav,  NavItem, Badge,Col,NavLink, Row,DropdownMenu, DropdownToggle} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetAllClassess } from '../../actions/Class';

 function ClassPage(props) {
    const token = localStorage.getItem('smartgate_token')
    const  {id}  = JwtDecode(token).school;

    useEffect(() => {
        const { Classes } = props;
        console.log();
        Classes(id);
       
    }, [])

        const { classes, isLoading, error } = props;
        console.log("classes:",classes);

        const Nodata = isLoading ? <div><Spinner /> </div> : <p>No data in the table</p>
        return (
            <>

                <Card className="card-box mb-5">
                    <div className="pt-4 px-4">
                        <Table responsive className="table-alternate-spaced mb-0">
                            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
                            <tr>
                                <th className="text-left px-4">No</th>
                                <th className="text-left">Level</th>
                                <th className="text-right">Year</th>
                                <th className="text-right">Combination</th>
                                <th className="text-right">Label</th>
                                <th className="text-center">View</th>
                                {/* <th className="text-center">Actions</th> */}
                            </tr>
                            </thead>
                            <tbody>
                           {
                               classes.length > 0 ? classes.map((Class, index) =>
                               <tr key={index}>
                               <td className="px-4">
                               {index+1}
                               </td>
                               <td className="text-left">
                                   <div>
                                       <div className="font-size-sm font-weight-bold">{Class.level} Level</div>
                                   </div>
                               </td>
                               <td className="text-right">
                                {Class.year}
                               </td>
                               <td className="text-right">
                                {Class.combination}
                               </td>
                               <td className="text-right">
                                {Class.label}
                               </td>
                               <td className="text-center">
                                   <Link to={`/classes/${Class.id}/students`}><FontAwesomeIcon icon={['far', 'eye']} className="font-size-sm" /> <small>students</small></Link>
                               </td>
                               {/* <td className="text-center">
                                   <Button color="neutral-first" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                   <Link to={`/classes/${Class.id}/edit`}><FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" /></Link>
                                   </Button>
                                   <Button color="neutral-danger" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                       <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
                                   </Button>
                               </td> */}
                           </tr>
                               ) : Nodata
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

    
    const mapStateToProps = ({ Class }) => ({
    
        classes: Class.classes,
        isLoading: Class.isLoading,
        error: Class.error,
    })
    
    export default connect(mapStateToProps, {
        Classes: GetAllClassess   
    })(ClassPage);
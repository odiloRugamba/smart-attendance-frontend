import React, {  useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import { Table, Card, Button, Spinner } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetAllSchools, DeleteSchool } from '../../actions/School';



 function AllSchools(props) {
    const [] = useState(true);

     useEffect(() => {
        const { Schools } = props;
        console.log(Schools);
        Schools();
     }, []);

     const { schools, isLoading } = props;
    //  console.log("delee",schools.id);

     function deleteItem(id) {
         console.log('this', id);
        props.DeteteList(id);
     }

     
    const Nodata = isLoading ? <div><Spinner /> </div> : <p>No data in the table</p>
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
                          <th scope="col" className="text-center">No</th>
                          <th scope="col">School Name</th>
                          <th scope="col">School Email</th>
                          <th scope="col">Head Name</th>
                          <th scope="col">Head Email</th>
                          <th scope="col">Head Phone</th>
                          <th scope="col"> Action</th>
                      </tr>
                      </thead>
                      <tbody>
                     {
                      schools && schools.length > 0 ? schools.map((school, index) =>
                        
                        <tr key={index}>
                        <td className="text-center text-black-50">
                            <span>
                                {index+1}
                            </span>
                        </td>
                        <td>
                            <b>
                                {school.schoolName}
                            </b>
                        
                        </td>
                        <td>
                            <span>
                                {school.schoolEmail}
                            </span>
                        </td>
                        <td className="font-size-lg font-weight-bold">
                        {school.headFirstName} - {school.headLastName}
                        </td>
                        <td className="text-warning">
                           <span>
                             {school.headEmail}
                           </span>
                        </td>
                        <td className="text-warning">
                           <span>
                             {school.schoolPhone} 
                           </span>
                        </td>
                        <td className="text-right">
      
                            <Button color="neutral-first"  className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                 <Link to={`/schools/${school.id}/edit`}><FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" /></Link>
                            </Button>
                            <Button color="neutral-danger" onClick={(e) => deleteItem(school.id)}  className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
                            </Button>
                        </td>
                    </tr>
                                           
                        ) : Nodata  }
                      <tr className="divider"></tr>
                      </tbody>
                  </Table>
              </div>
          </Card>
      </>
  );
}

const mapStateToProps = ({ School }) => ({
    
    schools: School.schools,
    isLoading: School.isLoading,
    error: School.error,
})
// const mapDispatchToProps = dispatch => bindActionCreators({
//     Schools: GetAllSchools
// }, dispatch)

export default connect(mapStateToProps, {
    Schools: GetAllSchools,
    DeteteList: DeleteSchool 
})(AllSchools);
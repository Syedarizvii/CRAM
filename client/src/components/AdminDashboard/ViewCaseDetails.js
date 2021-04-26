import React, { Component } from 'react';
import axios from 'axios';

class ViewCaseDetails extends Component {
   constructor(props) {
      super(props);
     
   }
   componentDidMount = () => {
      this.getCaseById();
   }

   // To get Case based on ID
   getCaseById() {
      axios.get('/api/addcrime/editstatus/' + this.props.match.params._id)
         .then((response) => {
            this.setState({
               designation: response.data.designation,
               investigated_by: response.data.investigated_by,
               status: response.data.status


            });
         })
         .catch((error) => {
            console.log(error);
         })
   }
   render() {

      return (
         <div className="container">
            <h1>
               investigated By:
               {this.state.investigated_by}
               <br />
               Designation:
               {this.state.designation}
               <br />
               Case Status:
               {this.state.status}


            </h1>
         </div>
      );
   }
}
export default ViewCaseDetails;

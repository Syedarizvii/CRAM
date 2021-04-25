import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {MDBBtn} from 'mdbreact';
import Navbar2 from "../layout/Navbar2";

class Signin extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
                <Navbar2 />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"600px"}}>
                <Link to="/login"><MDBBtn gradient="blue" className="py-3" style={{fontSize:"20px" , width:"255px"}} >Sign in as User</MDBBtn></Link>
                <br/>
                <Link to="/adminlogin"><MDBBtn gradient="blue" className="py-3" style={{fontSize:"20px", width:"255px"}}>Sign in as Admin</MDBBtn></Link>
            </div>
           </div>
            
         );
    }
}
 
export default Signin;
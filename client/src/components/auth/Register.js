import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBModalFooter } from 'mdbreact';
import '../../style.css';
import Navbar2 from "../layout/Navbar2";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nic:"",
      city:"",
      phone_no:"",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      nic: this.state.nic,
      city: this.state.city,
      phone_no: this.state.phone_no,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Navbar2 />
        <MDBContainer className="d-flex justify-content-center pt-5 pb-5">
          <MDBRow>
            <MDBCol>
              <form noValidate onSubmit={this.onSubmit}>
                <MDBCard className="register-card">
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="signup-signin-heading">
                        Sign Up
                      </h3>
                      <div className="heading-line">
                        <div className="heading-line-dot"></div>
                      </div>
                    </div>
                    <MDBInput
                      label="Your Name"
                      group
                      validate
                      success="right"
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                    <MDBInput
                      label="Your NIC"
                      group
                      validate
                      success="right"
                      onChange={this.onChange}
                      value={this.state.nic}
                      error={errors.nic}
                      id="nic"
                      type="text"
                      className={classnames("", {
                        invalid: errors.nic
                      })}
                    />
                    <span className="red-text">{errors.nic}</span>
                     <MDBInput
                      label="Your City"
                      group
                      validate
                      success="right"
                      onChange={this.onChange}
                      value={this.state.city}
                      error={errors.city}
                      id="city"
                      type="text"
                      className={classnames("", {
                        invalid: errors.city
                      })}
                    />
                    <span className="red-text">{errors.city}</span>
                     <MDBInput
                      label="Your Mobile No"
                      group
                      validate
                      success="right"
                      onChange={this.onChange}
                      value={this.state.phone_no}
                      error={errors.phone_no}
                      id="phone_no"
                      type="text"
                      className={classnames("", {
                        invalid: errors.phone_no
                      })}
                    />
                    <span className="red-text">{errors.phone_no}</span>
                    <MDBInput
                      label="Your Email"
                      group
                      validate
                      success="right"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                    <MDBInput
                      label="Your password"
                      group
                      validate
                      containerClass="mb-0"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                    <MDBInput
                      label="Confirm password"
                      group
                      validate
                      containerClass="mb-0"
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2
                      })}
                    />
                    <span className="red-text">{errors.password2}</span>
                    <div className="text-center mb-3 " >
                      <button
                        type="submit"
                        className="btn-block z-depth-1a white-text red-gradient waves-effect waves-light hoverable"
                      >
                        Sign Up
                </button>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="large-small black-text d-flex justify-content-end">
                      Already have an Account?
                <Link to="/login" className="blue-text ml-1 large-font">Log in</Link>
                    </p>
                  </MDBModalFooter>
                </MDBCard>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
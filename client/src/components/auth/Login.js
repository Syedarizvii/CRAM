import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBModalFooter } from 'mdbreact';
import '../../style.css';
import Navbar2 from "../layout/Navbar2";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
  };
}
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
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
                <MDBCard className="login-card">
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="signup-signin-heading">
                        Sign In as User
                      </h3>
                    </div>
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
                        invalid: errors.email || errors.emailnotfound
                      })}
                    />
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
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
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <div className="text-center mb-3 " >
                      <button
                        type="submit"
                        className="btn-block z-depth-1a white-text red-gradient waves-effect waves-light hoverable"
                      >
                        Sign In
                </button>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="large-small black-text d-flex justify-content-end">
                      Don't have an account yet?
                      <Link to="/otp" className="blue-text ml-1 large-font">Sign Up</Link>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
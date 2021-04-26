import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Index from "./components/layout/index";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Otp from "./components/layout/Otp";
import Profile from "./components/dashboard/profile";
import Report from "./components/dashboard/Report";
import Reportsuccessfull from './components/dashboard/Reportsuccessfull';
import OtpSuccessfull from './components/layout/OtpSuccessfull';
import AdminLogin from './components/auth/AdminLogin';
import Signin from './components/auth/signin';
import AdminCases from './components/AdminDashboard/AdminView';
import EditStatus from './components/AdminDashboard/editCaseStatus';
import UpdateCaseDetails from './components/AdminDashboard/UpdateCaseDetails';
import ViewCaseDetails from './components/AdminDashboard/viewcase';


import "./style.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="overflow">
            <Route exact path="/" component={Index} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/otp" component={Otp} />
            <Route exact path ="/otpsuccessfull" component ={OtpSuccessfull} />
            <Route exact path ="/signin" component ={Signin} />
            <Route exact path ="/adminlogin" component ={AdminLogin} />
            <Route exact path ="/admincases" component ={AdminCases} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path ="/report" component ={Report} />
              <PrivateRoute exact path ="/reportsuccessfull" component ={Reportsuccessfull} />  
              <PrivateRoute exact path="/edit-status/:_id" component={EditStatus} />
              <PrivateRoute exact path="/update-case-history/:_id" component={UpdateCaseDetails} />
              <PrivateRoute exact path="/viewcase/:_id" component={ViewCaseDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

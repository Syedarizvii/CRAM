const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.nic = !isEmpty(data.nic) ? data.nic : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.phone_no = !isEmpty(data.phone_no) ? data.phone_no : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  //Nic check
  if (!Validator.isLength(data.nic, { min: 13 })) {
    errors.nic = "NIC must be 13 digits long";
  }

  // City checks
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  //Phone No check
  if (!Validator.isLength(data.phone_no, { min: 11 })) {
    errors.phone_no = "Mobile Number must be 11 digits long";
  }


  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

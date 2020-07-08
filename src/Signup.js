import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className=" ml-auto" id="formDiv">
      <form action="#">
        <div className="row">
          {/* First Name */}
          <div className="input-group col-lg-6 mb-2">
            <input
              id="firstName"
              type="text"
              name="firstname"
              placeholder="First Name"
              className="form-control bg-white  border-md"
            />
          </div>
          {/*Last Name */}
          <div className="input-group col-lg-6 mb-2">
            <input
              id="lastName"
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="form-control bg-white  border-md"
            />
          </div>
          {/* Email Address */}
          <div className="input-group col-lg-12 mb-2">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-control bg-white  border-md"
            />
          </div>
          {/* Phone Number */}
          <div className="input-group col-lg-12 mb-0">
            <select
              id="countryCode"
              name="countryCode"
              style={{ maxWidth: "80px" }}
              className="custom-select form-control bg-white  border-md h-100 font-weight-bold text-muted"
            >
              <option value="">+12</option>
              <option value="">+10</option>
              <option value="">+15</option>
              <option value="">+18</option>
            </select>
            <input
              id="phoneNumber"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-control bg-white border-md  pl-3"
            />
          </div>
          .{/* Job */}
          <div className="input-group col-lg-12 mb-2">
            <select
              id="job"
              name="jobtitle"
              className="form-control custom-select bg-white  border-md"
            >
              <option value="">Select Role</option>
              <option value="">Organizer</option>
              <option value="">Attendee</option>
            </select>
          </div>
          {/* Password */}
          <div className="input-group col-lg-6 mb-2">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="form-control bg-white  border-md"
            />
          </div>
          {/* Password Confirmation */}
          <div className="input-group col-lg-6 mb-4">
            <input
              id="passwordConfirmation"
              type="text"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              className="form-control bg-white  border-md"
            />
          </div>
          {/*Submit Button */}
          <div className="form-group  mx-auto mb-2">
            <a href="#" className="btn btn-primary btn-block py-2">
              <span className="font-weight-bold">Create your account</span>
            </a>
          </div>
          {/*Divider Text */}
          <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-2">
            <div className="border-bottom w-100 ml-5"></div>
            <span className="px-2 small text-muted font-weight-bold text-muted">
              OR
            </span>
            <div className="border-bottom w-100 mr-5"></div>
          </div>
          {/* Social Login */}
          <div className="form-group col-sm-10 mx-auto w-400">
            <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
              <i className="fa fa-facebook-f mr-2"></i>
              <span className="font-weight-bold">Continue with Facebook</span>
            </a>
            <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
              <i className="fa fa-twitter mr-2"></i>
              <span className="font-weight-bold">Continue with Twitter</span>
            </a>
          </div>
          {/* Already Registered */}
          <div className="text-center w-100">
            <p className="text-muted font-weight-bold">
              Already Registered?{" "}
              <Link to="login" className="text-primary ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;

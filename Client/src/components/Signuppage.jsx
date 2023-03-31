import React, { PureComponent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Signuppage.css";

export default class Signuppage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return (
      <div>
        <main className="main">
          <div className="signupcontainer">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large" id="text-large">
                  {" "}
                  Register your account{" "}
                </h1>{" "}
                <p id="register-heading">
                  {" "}
                  Fill the below details to register{" "}
                </p>
              </div>{" "}
              <form
                name="signin"
                className="form"
                action="/register" 
                method="POST"
              >
                <div id="flnamelabel">
                  <p id="fnamelabel"> First Name </p>

                  <p id="lnamelabel"> Last Name </p>
                </div>{" "}
                <div id="flname">
                  <div className="input-control">
                    <label for="email" className="input-label" hidden>
                      {" "}
                      Email Address{" "}
                    </label>{" "}
                    <input
                      type="text"
                      name="firstName"
                      id="fname"
                      value={this.state.firstName}
                      className="input-field"
                      onChange={(e) => {
                        this.setState({ firstName: e.target.value });
                      }}
                      placeholder="First Name"
                    />
                  </div>{" "}
                  <div className="input-control">
                    <label for="email" className="input-label" hidden>
                      {" "}
                      Email Address{" "}
                    </label>{" "}
                    <input
                      type="text"
                      name="lastName"
                      id="lname"
                      value={this.state.lastName}
                      className="input-field"
                      onChange={(e) => {
                        this.setState({ lastName: e.target.value });
                      }}
                      placeholder="Last Name"
                    />
                  </div>{" "}
                </div>
                <p id="login-label"> Email </p>{" "}
                <div className="input-control">
                  <label for="email" className="input-label" hidden>
                    {" "}
                    Email Address{" "}
                  </label>{" "}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-field"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>{" "}
                {/* <div className="striped">
                  <span className="striped-line">
                    {" "}
                    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- -- --{" "}
                  </span>{" "}
                  <span className="striped-text"> or continue with </span>{" "}
                  <span className="striped-line">
                    {" "}
                    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- -- -- -{" "}
                  </span>{" "}
                </div>{" "} */}
                <div className="input-control">
                  <p id="login-label"> Phone Number </p>{" "}
                  <label for="phone" className="input-label" hidden>
                    {" "}
                    phone number{" "}
                  </label>{" "}
                  <input
                    type="tel"
                    id="phonenumber"
                    name="phoneNumber"
                    className="input-field"
                    value={this.state.phoneNumber}
                    placeholder="Phone number"
                    pattern="[0-9]{10}"
                    required
                    onChange={(e) => {
                      this.setState({ phoneNumber: e.target.value });
                    }}
                  />
                </div>{" "}
                <div className="input-control">
                  <p id="login-label"> Password </p>{" "}
                  <label for="password" className="input-label" hidden>
                    {" "}
                    Password{" "}
                  </label>{" "}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input-field"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>
                <div className="input-control">
                  <p id="login-label"> Confirm Password </p>{" "}
                  <label for="confirmPassword" className="input-label" hidden>
                    {" "}
                    Password{" "}
                  </label>{" "}
                  <input
                    type="password"
                    name="confirmPassword"
                    id="password"
                    className="input-field"
                    placeholder="Re-enter your password"
                    value={this.state.confirmPassword}
                    onChange={(e) => {
                      this.setState({ confirmPassword: e.target.value });
                    }}
                  />
                </div>
                <div className="method">
                  <div className="method-control1">
                    <a href="#" className="method-action">
                      Sign Up with Google{" "}
                    </a>{" "}
                  </div>{" "}
                  <div>
                    <input
                      type="submit"
                      name="submit"
                      className="input-submit"
                      value="Register"
                      // onClick={}
                    />
                  </div>{" "}
                  <div className="already">
                    <span id="already-account">
                      {" "}
                      Already have an account ?{" "}
                    </span>
                    <span>
                      {" "}
                      <a href="/login" className="already-login">
                        Login{" "}
                      </a>{" "}
                    </span>{" "}
                  </div>
                </div>{" "}
              </form>
            </section>{" "}
          </div>{" "}
        </main>
      </div>
    );
  }
}

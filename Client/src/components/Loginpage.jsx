import React, { PureComponent } from "react";
import "./Loginpage.css";
export default class Loginpage extends PureComponent {
  render() {
    return (
      <div>
        <main className="main">
          <div className="logincontainer">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large" id="text-large">
                  {" "}
                  Welcome back to Yumtiffin{" "}
                </h1>{" "}
                <p id="Login-heading"> Login to continue </p>
              </div>{" "}
              <form
                name="login"
                className="form"
                action="/login"
                method="POST"
              >
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
                  />
                </div>{" "}
                <div className="input-control-fgpass">
                  <a href="#" className="text text-links">
                    {" "}
                    Forgot Password{" "}
                  </a>
                </div>{" "}
                <div>
                  <input
                    type="submit"
                    name="submit"
                    className="input-submit"
                    value="Sign In"
                    // disabled
                  />
                </div>{" "}
                <div className="striped">
                  {/* <span className="striped-line">
                    {" "}
                    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- -- --{" "}
                  </span>{" "}
                  <span className="striped-text"> or continue with </span>{" "}
                  <span className="striped-line">
                    {" "}
                    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- -- -- -{" "}
                  </span>{" "} */}
                </div>{" "}
                <div className="method">
                  <div className="method-control1">
                    <a href="#" className="method-action">
                      Login with Google{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="method-control2">
                    <a href="#" className="method-action">
                      Login with Phonenumber{" "}
                    </a>{" "}
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

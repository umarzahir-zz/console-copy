import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PasswordMsg extends Component {
  render() {
    return (
      <div className="d-flex m-auto form-container text-left flex-wrap">
        <div className="w-100">
          <div className="">
            <h1 className="text-center">Message</h1>
          </div>
          <form className="col-12 form">
            <div className="form-group">
              <p className="text-justify">
                An email has been successfully sent to the particular email
                address. It will contain a link which will redirect you to a new
                page where you can successfully change your password. Thank you!
              </p>
            </div>
            <div className="form-footer w-100 d-flex justify-content-center">
              <Link
                type="submit"
                to="/login"
                className="btn btn-primary form-button"
              >
                Go to Homepage
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

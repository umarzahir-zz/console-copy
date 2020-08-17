import React, { Component } from "react";
import { connect } from "react-redux";
export default function (ComposedComponent) {
  class auth extends Component {
    componentWillMount = () => {
      console.log("hoc data");

      if (this.props.loginMessage !== "Login Success") {
        console.log("hoc fail");
        this.props.history.push("/");
      }
    };
    render() {
      return <ComposedComponent {...this.props}></ComposedComponent>;
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    loginMessage: state.admin.adminLoginMessage,
  });
  const mapDispatchToProps = (dispatch) => {
    return {};
  };

  return connect(mapStateToProps, mapDispatchToProps)(auth);
}

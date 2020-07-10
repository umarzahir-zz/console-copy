import React, { Component } from "react";
import { connect } from "react-redux";
export default function (ComposedComponent) {
  class auth extends Component {
    componentWillMount = () => {
      if (this.props.loginMessage === null) {
        console.log("hoc fail");
        this.props.history.push("/login");
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

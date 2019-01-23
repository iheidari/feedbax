import React, { Component } from "react";
import { connect } from "react-redux";
import commonActionTypes from "./constants/actionTypes/common";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: commonActionTypes.LOOKUPS_ASYNC });
  }
  render() {
    return <div>Main App</div>;
  }
}

export default connect(
  null,
  null
)(App);

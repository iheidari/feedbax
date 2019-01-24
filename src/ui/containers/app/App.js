import React, { Component } from "react";
import { connect } from "react-redux";
import commonActionTypes from "../../../constants/actionTypes/common";
import Router from './Router';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: commonActionTypes.LOOKUPS_ASYNC });
  }
  render() {
    return <Router />;
  }
}

export default connect(
  null,
  null
)(App);

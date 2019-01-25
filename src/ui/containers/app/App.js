import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "./Router";
import commonActionTypes from "../../../constants/actionTypes/common";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: commonActionTypes.LOOKUPS_ASYNC });
  }
  render() {
    return (
      <>
        <Header />
        <Router />
        <Footer />
      </>
    );
  }
}

export default connect(
  null,
  null
)(App);

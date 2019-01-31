import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "../../../theme";
import Router from "./Router";
import commonActionTypes from "../../../constants/actionTypes/common";
import Body from "../../components/layout/Body";
import Content from "../../components/layout/Content";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: commonActionTypes.LOOKUPS_ASYNC });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Body>
            <Content>
              <Header />
              <Router />
              <Footer />
            </Content>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default connect(
  null,
  null
)(App);

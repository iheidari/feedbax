import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '../../../theme';
import Router from './Router';
import Body from '../../components/layout/Body';
import Content from '../../components/layout/Content';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import DialogBox from '../../components/DialogBox';

class App extends Component {
  render() {
    let dialog = null;
    if (this.props.dialog) {
      const { content: dialogContent, ...dialogProperties } = this.props.dialog;
      dialog = <DialogBox {...dialogProperties}>{dialogContent}</DialogBox>;
    }
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Body>
            <Content>
              <Header />
              {dialog}
              <Router />
              <Footer />
            </Content>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  dialog: state.common.dialog
});

export default connect(mapStateToProps)(App);

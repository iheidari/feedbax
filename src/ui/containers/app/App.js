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
import SnackbarMessage from '../../components/SnackbarMessage';
import { closeSnackbar } from '../../../redux/actionCreators/common';
import { withTranslation } from 'react-i18next';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSnackbarClose = this.onSnackbarClose.bind(this);
  }

  onSnackbarClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeSnackbar();
  }

  render() {
    let dialog = null;
    if (this.props.dialog) {
      const { content: dialogContent, ...dialogProperties } = this.props.dialog;
      dialog = <DialogBox {...dialogProperties}>{dialogContent}</DialogBox>;
    }

    let snackbar = null;
    if (this.props.snackbar) {
      const {
        text: snackbarText,
        content: snackbarContent,
        ...snackbarProperties
      } = this.props.snackbar;
      snackbar = (
        <SnackbarMessage {...snackbarProperties} onClose={this.onSnackbarClose}>
          {this.props.t(snackbarText) || snackbarContent}
        </SnackbarMessage>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Body>
            <Content>
              <Header />
              {dialog}
              {snackbar}
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
  dialog: state.common.dialog,
  snackbar: state.common.snackbar
});
const mapDispatchToProps = { closeSnackbar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(App));

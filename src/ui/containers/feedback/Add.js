import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
import MessageSnackbar from '../../components/layout/MessageSnackbar';
import Button from '@material-ui/core/Button';
import {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync,
  closeSnackbar
} from '../../../redux/actionCreators/feedback';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false, snackbarMessage: '' };

    this.modelChanged = this.modelChanged.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);
    this.onSnackbarClose = this.onSnackbarClose.bind(this);
  }

  modelChanged(key) {
    return event => {
      const newValue = { [key]: event.target.value };
      this.props.modelChanged(this.props.feedback, newValue);
    };
  }

  saveFeedback() {
    this.props.saveFeedbackAsync(this.props.feedback, this.props.feedbacks);
  }

  componentDidMount() {
    if (this.props.id)
      this.props.loadFeedbackAsync(this.props.id, this.props.feedbacks);
  }

  onSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeSnackbar();
  };

  render() {
    if (this.props.id && !this.props.feedback.id) return null;
    return (
      <div>
        <Feedback
          model={this.props.feedback}
          fieledChanged={this.modelChanged}
        />
        <Button variant='contained' onClick={this.saveFeedback}>
          Save
        </Button>
        <Link to='/feedback'>Back</Link>
        <MessageSnackbar open={this.props.saved} onClose={this.onSnackbarClose}>
          {this.props.saveMessage}
        </MessageSnackbar>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
  feedback: state.feedback.current,
  feedbacks: state.feedback.list,
  saved: state.feedback.saved,
  saveMessage: state.feedback.saveMessage
});

const mapDispatchToProps = {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync,
  closeSnackbar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

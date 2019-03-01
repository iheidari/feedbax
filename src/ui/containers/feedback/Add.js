import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
import Button from '@material-ui/core/Button';
import {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync
} from '../../../redux/actionCreators/feedback';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false, snackbarMessage: '' };

    this.modelChanged = this.modelChanged.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);
  }

  modelChanged(key) {
    return event => {
      const newValue = { [key]: event.target.value };
      this.props.modelChanged(this.props.feedback, newValue);
    };
  }

  saveFeedback() {
    this.props.saveFeedbackAsync(this.props.feedback);
  }

  componentDidMount() {
    if (this.props.id) this.props.loadFeedbackAsync(this.props.id);
  }

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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
  feedback: state.feedback.current
});

const mapDispatchToProps = {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

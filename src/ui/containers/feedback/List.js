import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackRowView from '../../components/feedback/FeedbackRowView';
import {
  loadFeedbacksAsync,
  deleteFeedbackAsync
} from '../../../redux/actionCreators/feedback';

export class List extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(feedbackId) {
    return () =>
      this.props.deleteFeedbackAsync(feedbackId, this.props.feedbacks);
  }

  componentDidMount() {
    if (this.props.feedbacks.length === 0) {
      this.props.loadFeedbacksAsync();
    }
  }

  render() {
    const feedbackRows = this.props.feedbacks.map(feedback => (
      <FeedbackRowView
        {...feedback}
        key={feedback.id}
        onDelete={this.onDelete(feedback.id)}
      />
    ));
    return <div>{feedbackRows}</div>;
  }
}

const mapStateToProps = state => ({
  feedbacks: state.feedback.list
});

const mapDispatchToProps = { loadFeedbacksAsync, deleteFeedbackAsync };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

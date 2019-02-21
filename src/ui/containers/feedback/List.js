import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FeedbackRowView from '../../components/feedback/FeedbackRowView';
import {
  loadFeedbacksAsync,
  deleteFeedbackAsync
} from '../../../redux/actionCreators/feedback';
import FeedbackRowHeader from '../../components/feedback/FeedbackRowHeader';
import { reverseOrder } from '../../../util/http';
import uiModel from './uiModel';

const Row = styled(Grid)`
  border: 1px solid black;
  padding: 10px;
`;

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDelete = this.onDelete.bind(this);
    this.onOrder = this.onOrder.bind(this);
  }

  onDelete(feedbackId) {
    return () => {
      const loadingProps = {
        page: this.props.page,
        take: this.props.take,
        orderColumn: this.state.orderColumn,
        order: this.props.order
      };
      return this.props.deleteFeedbackAsync(feedbackId, loadingProps);
    };
  }

  onOrder(orderColumn) {
    return () => {
      this.setState({ orderColumn });

      //change sort direction after each click on column
      const order = reverseOrder(
        this.props.order,
        this.props.sort,
        orderColumn
      );

      this.props.loadFeedbacksAsync(
        this.props.page,
        this.props.take,
        orderColumn,
        order
      );
    };
  }

  componentDidMount() {
    this.props.loadFeedbacksAsync();
  }

  render() {
    if (!this.props.feedbacks) {
      return 'fetching feedbacks';
    }
    if (this.props.feedbacks.length === 0) {
      return 'no feedback founds';
    }
    const feedbackRows = this.props.feedbacks.map(feedback => (
      <FeedbackRowView
        {...feedback}
        key={feedback.id}
        model={uiModel}
        onDelete={this.onDelete(feedback.id)}
      />
    ));
    return (
      <Row container>
        <FeedbackRowHeader
          onOrder={this.onOrder}
          sort={this.props.sort}
          order={this.props.order}
          model={uiModel}
        />
        {feedbackRows}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  feedbacks: state.feedback.list,
  page: state.feedback.page,
  take: state.feedback.take,
  sort: state.feedback.sort,
  order: state.feedback.order
});

const mapDispatchToProps = { loadFeedbacksAsync, deleteFeedbackAsync };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

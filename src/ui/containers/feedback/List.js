import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FeedbackRowView from '../../components/feedback/FeedbackRowView';
import {
  loadFeedbacksAsync,
  deleteFeedbackAsync
} from '../../../redux/actionCreators/feedback';
import { showDialog, closeDialog } from '../../../redux/actionCreators/common';
import FeedbackRowHeader from '../../components/feedback/FeedbackRowHeader';
import { reverseOrder } from '../../../util/http';
import uiModel from './uiModel';
import Paging from '../../components/Paging';
import {
  createDialogModel,
  createOkCancelActions
} from '../../../util/dialogBox';

const Row = styled(Grid)`
  border: 1px solid black;
  padding: 10px;
`;

export class List extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onOrder = this.onOrder.bind(this);
    this.onPagerChange = this.onPagerChange.bind(this);
  }

  onDelete(feedbackId) {
    return () => {
      const loadingProps = {
        page: this.props.page,
        take: this.props.take,
        sort: this.props.sort,
        order: this.props.order
      };
      //in case we delete single item in the page, switch to the previous page
      if (this.props.feedbacks.length === 1 && loadingProps.page !== 1)
        loadingProps.page--;

      const onOk = () =>
        this.props.deleteFeedbackAsync(feedbackId, loadingProps);
      const onCancel = this.props.closeDialog;

      const dialogModel = createDialogModel(
        true,
        'Confirmation',
        'Are you sure?',
        createOkCancelActions(onOk, onCancel)
      );
      this.props.showDialog(dialogModel);
    };
  }

  onOrder(newSortColumn) {
    return () => {
      //change sort direction after each click on column
      const order = reverseOrder(
        this.props.order,
        this.props.sort,
        newSortColumn
      );

      this.props.loadFeedbacksAsync(
        this.props.page,
        this.props.take,
        newSortColumn,
        order
      );
    };
  }

  onPagerChange(page, take) {
    return () => {
      let loadPage = page;
      if (page === 'p') loadPage = this.props.page - 1;
      if (page === 'n') loadPage = this.props.page + 1;
      this.props.loadFeedbacksAsync(
        loadPage,
        take,
        this.props.sort,
        this.props.order
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
        <Paging
          current={this.props.page}
          take={this.props.take}
          count={this.props.count}
          onPagerChange={this.onPagerChange}
        />
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  feedbacks: state.feedback.list,
  page: state.feedback.page,
  take: state.feedback.take,
  sort: state.feedback.sort,
  order: state.feedback.order,
  count: state.feedback.count
});

const mapDispatchToProps = {
  loadFeedbacksAsync,
  deleteFeedbackAsync,
  showDialog,
  closeDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

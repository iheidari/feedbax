import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import Button from '@material-ui/core/Button';
import {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync
} from '../../../redux/actionCreators/feedback';
import uiModel from './uiModel';
import { withTranslation } from 'react-i18next';

export class Add extends Component {
  constructor(props) {
    super(props);

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
    //const { t } = useTranslation();
    if (this.props.id && !this.props.feedback.id) return null;
    return (
      <div>
        <Form
          dataModel={this.props.feedback}
          uiModel={uiModel.form}
          onModelChange={this.modelChanged}
        />
        <Button variant='contained' onClick={this.saveFeedback}>
          {this.props.t('Save')}
        </Button>
        <Link to='/feedback'>{this.props.t('Back')}</Link>
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
)(withTranslation()(Add));

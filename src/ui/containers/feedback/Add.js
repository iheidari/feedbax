import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import Button from '@material-ui/core/Button';
import {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync,
  updateFeedback
} from '../../../redux/actionCreators/feedback';
import uiModel from './uiModel';
import { withTranslation } from 'react-i18next';
import { validate, isValid } from '../../../util/validation';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.modelChanged = this.modelChanged.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);
  }

  modelChanged(key) {
    return param => {
      console.log(param.target);
      const newValue = {
        [key]: param.target ? param.target.value : param
      };
      console.log(newValue);
      this.props.modelChanged(this.props.feedback, newValue);
    };
  }

  saveFeedback() {
    const validatedFeedback = validate(uiModel.form, this.props.feedback);
    this.props.updateFeedback(validatedFeedback);
    if (isValid(validatedFeedback))
      this.props.saveFeedbackAsync(this.props.feedback);
  }

  componentDidMount() {
    if (this.props.id) this.props.loadFeedbackAsync(this.props.id);
  }

  render() {
    if (this.props.id && !this.props.feedback._id) return null;
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
  saveFeedbackAsync,
  updateFeedback
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Add));

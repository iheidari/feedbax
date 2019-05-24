import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../../components/Feedback/Form';
import Button from '@material-ui/core/Button';
import {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync,
  updateFeedback
} from '../../../redux/actionCreators/feedback';
import uiModel from './uiModel';
import { withTranslation } from 'react-i18next';
import { validate, validateField, isValid } from '../../../util/validation';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = { activeField: '' };

    this.modelChanged = this.modelChanged.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);
  }

  modelChanged(key) {
    return param => {
      const value = param.target ? param.target.value : param;
      const newValue = {
        [key]: value
      };
      this.props.modelChanged(this.props.feedback, newValue);
      const validation = uiModel.validations[key];
      if (validation) {
        const fieldValidation = validateField(validation, value);
        const validationResult = { [key]: fieldValidation };
        this.props.updateFeedback({ validation: validationResult });
      }
    };
  }

  saveFeedback() {
    const validationResult = validate(uiModel.validations, this.props.feedback);
    if (isValid(validationResult))
      this.props.saveFeedbackAsync(this.props.feedback);
    else this.props.updateFeedback({ validation: validationResult });
    if (validationResult) {
      for (let field in validationResult) {
        //TODO: Since the validationResult is an object and not an array,
        //it is possible that it change the focus to a wrong component
        const result = validationResult[field];
        if (result && result.length > 0) {
          this.setState({ activeField: field });
          break;
        }
      }
    }
  }

  componentDidMount() {
    if (this.props.id) this.props.loadFeedbackAsync(this.props.id);
  }

  render() {
    if (this.props.id && !this.props.feedback._id) return null;
    return (
      <div>
        <Form
          data={this.props.feedback}
          validation={this.props.validation}
          onModelChange={this.modelChanged}
          activeField={this.state.activeField}
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
  feedback: state.feedback.current,
  validation: state.feedback.current.validation || {}
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

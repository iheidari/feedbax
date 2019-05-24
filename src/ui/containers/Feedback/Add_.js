import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../../components/Feedback/Form';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import uiModel from './uiModel';
import { validate, validateField, isValid } from '../../../util/validation';
import {
  modelChanged,
  loadFeedbackAsync,
  saveFeedbackAsync,
  updateFeedback
} from '../../../redux/actionCreators/feedback';

const Add = props => {
  const { t } = useTranslation();

  const modelChanged = key => {
    return param => {
      const value = param.target ? param.target.value : param;
      const newValue = {
        [key]: value
      };
      props.modelChanged(props.feedback, newValue);
      const validation = uiModel.validations[key];
      if (validation) {
        const fieldValidation = validateField(validation, value);
        const validationResult = { [key]: fieldValidation };
        props.updateFeedback({ validation: validationResult });
      }
    };
  };

  const saveFeedback = () => {
    const validationResult = validate(uiModel.validations, props.feedback);
    if (isValid(validationResult)) props.saveFeedbackAsync(props.feedback);
    else props.updateFeedback({ validation: validationResult });
    if (validationResult) {
      for (let field in validationResult) {
        //TODO: Since the validationResult is an object and not an array,
        //it is possible that it change the focus to a wrong component
        const result = validationResult[field];
        if (result && result.length > 0) {
          setActiveField(field);
          break;
        }
      }
    }
  };

  const [activeField, setActiveField] = useState('');

  useEffect(() => {
    return () => {
      if (props.id) props.loadFeedbackAsync(props.id);
    };
  }, [props.id]);

  return (
    <div>
      <Form
        data={props.feedback}
        validation={props.validation}
        onModelChange={modelChanged}
        activeField={activeField}
      />
      <Button variant='contained' onClick={saveFeedback}>
        {t('Save')}
      </Button>
      <Link to='/feedback'>{t('Back')}</Link>
    </div>
  );
};

Add.propTypes = {
  id: PropTypes.string,
  feedback: PropTypes.object,
  validation: PropTypes.object
};

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
)(Add);

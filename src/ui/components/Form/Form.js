import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { getControllerByModel } from '../../../util/ui';

const Form = ({ dataModel, uiModel, onModelChange }) => {
  let formControls = [];
  for (let field in uiModel.fields) {
    const model = uiModel.fields[field];
    const dataValue = dataModel[field];
    const fieldMainControl = getControllerByModel(
      field,
      model,
      dataValue,
      onModelChange
    );
    const fieldControl = (
      <Grid key={field} item {...model.size}>
        {fieldMainControl}
      </Grid>
    );
    formControls.push(fieldControl);
  }
  return <Grid container>{formControls}</Grid>;
};

Form.propTypes = {
  dataModel: PropTypes.object.isRequired,
  uiModel: PropTypes.object.isRequired,
  onModelChange: PropTypes.func
};

export default Form;

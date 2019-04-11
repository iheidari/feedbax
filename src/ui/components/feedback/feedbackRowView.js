import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FeedbackLink from './FeedbackLink';
import Cell from './Cell';

const Column = styled(Grid)`
  border: 1px solid black;
  padding: 5px;
`;

const FeedbackRowView = props => {
  const fields = props.model.list.fields;
  let fieldsComponents = [];
  for (let field in fields) {
    const uiModel = fields[field];
    const dataModel = props.data[field];
    fieldsComponents.push(
      <Column
        item
        key={field}
        {...uiModel.size}
        onClick={uiModel.action && props[uiModel.action]}
      >
        {uiModel.linkable ? (
          <FeedbackLink {...props.data} />
        ) : (
          <Cell uiModel={uiModel} dataModel={dataModel} />
        )}
      </Column>
    );
  }
  return fieldsComponents;
};

FeedbackRowView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default FeedbackRowView;

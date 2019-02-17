import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FeedbackLink from './FeedbackLink';

const Row = styled(Grid)`
  border: 1px solid black;
  padding: 10px;
`;

const Column = styled(Grid)`
  border: 1px solid black;
  padding: 5px;
`;

const FeedbackRowView = props => {
  return (
    <Row container>
      <Column item lg={3}>
        <FeedbackLink {...props} />
      </Column>
      <Column item lg={7}>
        {props.description}
      </Column>
      <Column item lg={2} onClick={props.onDelete}>
        Delete
      </Column>
    </Row>
  );
};

FeedbackRowView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default FeedbackRowView;

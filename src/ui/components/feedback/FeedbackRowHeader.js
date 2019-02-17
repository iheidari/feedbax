import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import OrderSign from './OrderSign';

const Row = styled(Grid)`
  border: 1px solid black;
  padding: 10px;
`;

const Column = styled(Grid)`
  border: 1px solid black;
  padding: 5px;
`;

const FeedbackRowHeader = props => {
  return (
    <Row container>
      <Column item lg={3} onClick={props.onOrder('title')}>
        <OrderSign
          sort={props.sort}
          order={props.order}
          columnName='title'
          columnTitle='Title'
        />
      </Column>
      <Column item lg={7} onClick={props.onOrder('description')}>
        <OrderSign
          sort={props.sort}
          order={props.order}
          columnName='description'
          columnTitle='Description'
        />
      </Column>
      <Column item lg={2} />
    </Row>
  );
};

export default FeedbackRowHeader;

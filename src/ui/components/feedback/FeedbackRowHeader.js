import React from 'react';
import ListHeader from '../layout/ListHeader';

const FeedbackRowHeader = props => {
  console.log('feedbackHeader');
  const columns = props.model.list.columns;
  let columnsComponents = [];
  for (let column in columns) {
    const col = columns[column];
    columnsComponents.push(
      <ListHeader
        key={column}
        name={column}
        model={col}
        sort={props.sort}
        order={props.order}
        onClick={props.onOrder(column)}
      />
    );
  }

  return columnsComponents;
};

export default FeedbackRowHeader;

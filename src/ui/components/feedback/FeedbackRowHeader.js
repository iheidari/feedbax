import React from 'react';
import ListHeader from '../layout/ListHeader';

const FeedbackRowHeader = props => {
  const fields = props.model.list.fields;
  let fieldsComponents = [];
  for (let field in fields) {
    const filedModel = fields[field];
    fieldsComponents.push(
      <ListHeader
        key={field}
        name={field}
        model={filedModel}
        sort={props.sort}
        order={props.order}
        onClick={props.onOrder(field)}
      />
    );
  }

  return fieldsComponents;
};

export default FeedbackRowHeader;

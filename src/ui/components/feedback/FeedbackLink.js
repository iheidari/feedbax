import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackLink = props => {
  return (
    <Link to={`/feedback/edit/${props.id.value}`}>{props.title.value}</Link>
  );
};

export default FeedbackLink;

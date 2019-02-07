import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackLink = props => {
  return <Link to={`/feedback/edit/${props.id}`}>{props.title}</Link>;
};

export default FeedbackLink;

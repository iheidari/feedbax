import React from 'react'
import PropTypes from 'prop-types'

const FeedbackRowView = props => {
  return (
    <div>
      Feedback component
      Title: {props.title}
    </div>
  )
}

FeedbackRowView.propTypes = {
  title: PropTypes.string
}

export default FeedbackRowView

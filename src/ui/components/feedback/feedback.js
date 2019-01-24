import React from 'react'
import PropTypes from 'prop-types'

const Feedback = props => {
  return (
    <div>
      Feedback component
      Title: {props.title}
    </div>
  )
}

Feedback.propTypes = {
  title: PropTypes.string
}

export default Feedback

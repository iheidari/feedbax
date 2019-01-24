import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Edit extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        Edit:
        {this.props.match.params.id}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

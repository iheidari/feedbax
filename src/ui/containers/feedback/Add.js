import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Add extends Component {

  render() {
    return (
      <div>
        Add
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)

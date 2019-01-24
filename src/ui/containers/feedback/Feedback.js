import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "./Router";

export class Feedback extends Component {
  render() {
    return (
      <div>
        Feedbacks
        <Router {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);

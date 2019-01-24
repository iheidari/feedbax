import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "./Router";

export class Feedback extends Component {
  render() {
    const { match, history, isExact } = { ...this.props };
    return (
      <div>
        Feedbacks
        <Router match={match} history={history} isExact={isExact} />
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

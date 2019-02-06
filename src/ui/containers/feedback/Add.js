import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../../components/feedback/Feedback';
import Button from '@material-ui/core/Button';
import { saveFeedbackAsync } from '../../../redux/actionCreators/feedback';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.modelChanged = this.modelChanged.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);

    this.state = {
      model: {
        title: 'changing room',
        description: 'changing room need a better washroom'
      }
    };
  }

  modelChanged(key) {
    return event => {
      const newValue = { [key]: event.target.value };
      this.setState(state => ({
        ...state,
        model: { ...state.model, ...newValue }
      }));
    };
  }

  saveFeedback() {
    this.props.saveFeedbackAsync(this.state.model);
  }

  render() {
    return (
      <div>
        <Feedback model={this.state.model} fieledChanged={this.modelChanged} />
        <Button variant='contained' onClick={this.saveFeedback}>
          Save
        </Button>
        <Button>Back</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { saveFeedbackAsync };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

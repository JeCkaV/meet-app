import React, { Component } from "react";

import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  constructor() {
    super();
    // stting the values for the default states
    this.state = {
        numberOfEvents: 32,
        infoText: "",
    };
}

  changeNumOfEvents = (e) => {
    let newValue = parseInt(e.target.value);
    if ((newValue > 32) || (newValue < 1)) {
      this.setState({
        numberOfEvents: newValue,
        infoText: 'Please choose any number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: newValue,
        infoText: ' ',
      })
    }
        this.props.updateEvents(undefined, newValue);
  }

  render() {
    return (
      <>
      <div className="numberOfEvents text-muted">How many events would you like to see on this page?</div>
      <input 
            className="events_number__input my-3" 
            type="number" 
            onChange={this.changeNumOfEvents}
            value={this.state.numberOfEvents}>
        </input>
      <ErrorAlert text={this.state.infoText} />
      </>
    );
  }
}

export default NumberOfEvents;
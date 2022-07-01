import React, { Component } from 'react';

class Cv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state } = this.props;
    return (
      <div>
        <div>{state.personalDetails.name}</div>
        <div>{state.personalDetails.phone}</div>
        <div>{state.personalDetails.email}</div>
        <div>{state.personalDetails.location}</div>
        <div>{state.personalDetails.description}</div>
      </div>
    );
  }
}

export default Cv;

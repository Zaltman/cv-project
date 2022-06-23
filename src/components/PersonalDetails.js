import { Component } from 'react';

class PersonalDetails extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <form id="personalForm" className={'inputContainer'}>
          <div id="personalContainerTitle">Personal Details</div>
          <input id="nameInput" placeholder="Name"></input>
          <input id="titleInput" placeholder="Title"></input>
          <input id="phoneInput" placeholder="Phone"></input>
          <input id="emailInput" placeholder="Email"></input>
          <input id="locationInput" placeholder="Location"></input>
          <input id="descriptionInput" placeholder="Description"></input>
        </form>
      </div>
    );
  }
}

export default PersonalDetails;

import { Component } from 'react';

class PersonalDetails extends Component {
  render() {
    const { personalDetailsObj, handleChangePersonal } = this.props;

    return (
      <div>
        <form id="personalForm" className={'inputContainer'}>
          <div onChange={handleChangePersonal} id="personalContainerTitle">
            Personal Details
          </div>
          <input
            onChange={handleChangePersonal}
            data-inputname={'name'}
            value={personalDetailsObj.name}
            placeholder="Name"
          ></input>
          <input
            onChange={handleChangePersonal}
            data-inputname={'phone'}
            placeholder="Phone"
            value={personalDetailsObj.phone}
          ></input>
          <input
            onChange={handleChangePersonal}
            data-inputname={'email'}
            placeholder="Email"
            value={personalDetailsObj.email}
          ></input>
          <input
            onChange={handleChangePersonal}
            data-inputname={'location'}
            placeholder="Location"
            value={personalDetailsObj.location}
          ></input>
          <input
            onChange={handleChangePersonal}
            data-inputname={'description'}
            placeholder="Description"
            value={personalDetailsObj.description}
          ></input>
        </form>
      </div>
    );
  }
}

export default PersonalDetails;

// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Cv from './Cv';
import Education from './Education';
import PersonalDetails from './PersonalDetails';
import WorkExp from './WorkExp';

class Page extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const state = this.props.state;
    const addAnotherEducation = this.props.addAnotherEducation;
    const handleChangeEdu = this.props.handleChangeEdu;
    // console.log(addAnotherEducation);
    return (
      <div>
        <PersonalDetails />
        <WorkExp />
        {state.educationArr.map((educationObj, index) => {
          return (
            <Education
              educationObj={educationObj}
              key={educationObj.id}
              index={index}
              handleChangeEdu={handleChangeEdu}
            />
          );
        })}
        <button onClick={addAnotherEducation}>Add education</button>

        <Cv />
      </div>
    );
  }
}
export default Page;

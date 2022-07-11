// import { render } from '@testing-library/react';
import React from 'react';
import Cv from './Cv';
import Education from './Education';
import PersonalDetails from './PersonalDetails';
import WorkExp from './WorkExp';

function Page(props) {
  const state = props.state;
  const addAnotherEducation = props.addAnotherEducation;
  const addAnotherWorkExp = props.addAnotherWorkExp;
  const handleChangePersonal = props.handleChangePersonal;
  const handleChangeEdu = props.handleChangeEdu;
  const handleChangeWorkExp = props.handleChangeWorkExp;
  const handleToggle = props.handleToggle;
  let element = '';
  if (!state.isActive) {
    element = 'Edit setup';
  } else {
    element = 'Confirm setup';
  }
  return (
    <div>
      <div className={`inputsContainer ${state.isActive ? '' : 'hidden'}`}>
        <PersonalDetails personalDetailsObj={state.personalDetails} handleChangePersonal={handleChangePersonal} />

        {state.workExperienceArr.map((workExpObj, index) => {
          return (
            <WorkExp
              workExpObj={workExpObj}
              key={workExpObj.id}
              index={index}
              handleChangeWorkExp={handleChangeWorkExp}
            />
          );
        })}

        <button onClick={addAnotherWorkExp}>Add work experience</button>

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
      </div>
      <button className="setupBtn" onClick={handleToggle}>
        {element}
      </button>
      <Cv state={state} />
    </div>
  );
}

export default Page;

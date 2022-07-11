import React from 'react';
import uniqid from 'uniqid';

function Cv(props) {
  const { state } = props;
  return (
    <div id="cv">
      <div id="personalDetails">
        <h2 id="name">{state.personalDetails.name}</h2>

        <div>
          <div id="phoneNumb">{state.personalDetails.phone}</div>
          <div>{state.personalDetails.email}</div>
        </div>
        <div>
          <div>{state.personalDetails.location}</div>
          <div>{state.personalDetails.description}</div>
        </div>
      </div>
      <div className="infoContainer">
        <div className="workParentContainer">
          <h2 className="title">Work experience</h2>
          {state.workExperienceArr.map((workExpObj, index) => {
            return (
              <div key={uniqid()} className="cvWorkContainer">
                <h3 className="subTitle">{workExpObj.position}</h3>
                <h4 className="subSubTitle">{workExpObj.company}</h4>
                <div>Started: {workExpObj.startDate}</div>
                <div>Finished: {workExpObj.endDate}</div>
                <div>{workExpObj.description}</div>
              </div>
            );
          })}
        </div>
        <div className="educationParentContainer">
          <h2 className="title">Education</h2>
          {state.educationArr.map((educationObj, index) => {
            return (
              <div key={uniqid()} className="cvEducationContainer">
                <h3 className="subTitle">{educationObj.courseProgram}</h3>
                <h4 className="subSubTitle">{educationObj.university}</h4>
                <div>Started: {educationObj.startDate}</div>
                <div>Ended: {educationObj.endDate}</div>
                <div>{educationObj.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cv;

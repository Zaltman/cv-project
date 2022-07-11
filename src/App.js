import './App.css';
import { Component } from 'react';
import Page from './components/Page';
import uniqid from 'uniqid';
import { useState } from 'react';

function App(props) {
  let educationTestUnit = [];
  let workExpTestUnit = [];
  educationTestUnit[0] = {
    id: uniqid(),
    courseProgram: 'Full stack development',
    university: 'The odin project',
    startDate: '2021/09/30',
    endDate: 'Ongoing',
    description: 'Lore ipsum text',
  };
  workExpTestUnit[0] = {
    id: uniqid(),
    company: 'Things and stuff LTD',
    position: 'Operator',
    startDate: '2015/05/07',
    endDate: '2019/04/07',
    description: 'Doing things and stuff 5 days a week',
  };
  let personDetailsTest = {
    id: uniqid(),
    name: 'John Johnson ',
    phone: '+3641231456',
    email: 'johnjohnson@email.com',
    location: 'Atlantis, seaside city',
    description: 'I am a simple man',
  };

  const [state, setState] = useState({
    isActive: true,
    personalDetails: personDetailsTest,
    workExperience: {
      id: uniqid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
    workExperienceEmptySample: {
      id: uniqid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
    workExperienceArr: workExpTestUnit,
    education: {
      id: uniqid(),
      courseProgram: '',
      university: '',
      startDate: '',
      endDate: '',
      description: '',
    },
    educationEmptySample: {
      id: uniqid(),
      courseProgram: '',
      university: '',
      startDate: '',
      endDate: '',
      description: '',
    },

    educationArr: educationTestUnit,
  });

  let handleToggle = () => {
    setState.isActive((state.isActive = !state.isActive));
  };
  let getEmptyEducationSample = () => {
    const emptyEduArr = { ...state.educationEmptySample };
    emptyEduArr.id = uniqid();
    return emptyEduArr;
  };
  let getEmptyWorkExpSample = () => {
    const emptyWorkExpArr = { ...state.workExperienceEmptySample };
    emptyWorkExpArr.id = uniqid();
    return emptyWorkExpArr;
  };

  let addAnotherEducation = () => {
    const eduArrToConcat = getEmptyEducationSample();
    let newArray = state.educationArr.concat(eduArrToConcat);
    state.educationArr = newArray;
  };
  let addAnotherWorkExp = () => {
    const workExpArrToConcat = getEmptyWorkExpSample();
    let newArray = state.workExperienceArr.concat(workExpArrToConcat);
    state.workExperienceArr = newArray;
  };
  let handleChangePersonal = (e) => {
    let value = e.target.value;
    let newPersObj = state.personalDetails;
    let inputName = e.target.dataset.inputname;
    switch (inputName) {
      case 'name':
        newPersObj.name = value;
        break;
      case 'phone':
        newPersObj.phone = value;
        break;
      case 'email':
        newPersObj.email = value;
        break;
      case 'location':
        newPersObj.location = value;
        break;
      case 'description':
        newPersObj.description = value;
        break;
    }
    state.personalDetails = newPersObj;
  };

  let handleChangeWorkExp = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newWorkExpArr = [...state.workExperienceArr];
    let inputName = e.target.dataset.inputname;
    switch (inputName) {
      case 'company':
        newWorkExpArr[arrIndex].company = value;
        break;
      case 'position':
        newWorkExpArr[arrIndex].position = value;
        break;
      case 'startDate':
        newWorkExpArr[arrIndex].startDate = value;
        break;
      case 'endDate':
        newWorkExpArr[arrIndex].endDate = value;
        break;
      case 'description':
        newWorkExpArr[arrIndex].description = value;
        break;
    }
    state.workExperienceArr = newWorkExpArr;
    // this.setState({
    //   workExperienceArr: newWorkExpArr,
    // });
  };
  let handleChangeEdu = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newEduArr = [...state.educationArr];
    let inputName = e.target.dataset.inputname;
    switch (inputName) {
      case 'courseProgram':
        newEduArr[arrIndex].courseProgram = value;
        break;
      case 'university':
        newEduArr[arrIndex].university = value;
        break;
      case 'startDate':
        newEduArr[arrIndex].startDate = value;
        break;
      case 'endDate':
        newEduArr[arrIndex].endDate = value;
        break;
      case 'description':
        newEduArr[arrIndex].description = value;
        break;
    }
    state.educationArr = newEduArr;
  };

  {
    return (
      <div className="App">
        <Page
          state={state}
          handleToggle={handleToggle}
          addAnotherEducation={addAnotherEducation}
          addAnotherWorkExp={addAnotherWorkExp}
          handleChangePersonal={handleChangePersonal}
          handleChangeEdu={handleChangeEdu}
          handleChangeWorkExp={handleChangeWorkExp}
        />
      </div>
    );
  }
}

export default App;

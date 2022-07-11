import './App.css';
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

  const handleToggle = () => {
    let newState = { ...state };
    newState.isActive = !newState.isActive;
    setState(newState);
  };
  const getEmptyEducationSample = () => {
    const emptyEduArr = { ...state.educationEmptySample };
    emptyEduArr.id = uniqid();
    return emptyEduArr;
  };
  const getEmptyWorkExpSample = () => {
    const emptyWorkExpArr = { ...state.workExperienceEmptySample };
    emptyWorkExpArr.id = uniqid();
    return emptyWorkExpArr;
  };

  const addAnotherEducation = () => {
    const eduArrToConcat = getEmptyEducationSample();
    let newArray = state.educationArr.concat(eduArrToConcat);
    let newState = { ...state };
    newState.educationArr = newArray;
    setState(newState);
  };
  const addAnotherWorkExp = () => {
    const workExpArrToConcat = getEmptyWorkExpSample();
    let newArray = state.workExperienceArr.concat(workExpArrToConcat);
    let newState = { ...state };
    newState.workExperienceArr = newArray;
    setState(newState);
  };
  const handleChangePersonal = (e) => {
    let value = e.target.value;
    let newPersObj = state.personalDetails;
    let inputName = e.target.dataset.inputname;
    let newState = { ...state };
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
    newState.personalDetails = newPersObj;
    setState(newState);
  };

  let handleChangeWorkExp = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newWorkExpArr = [...state.workExperienceArr];
    let inputName = e.target.dataset.inputname;
    let newState = { ...state };

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
    newState.workExperienceArr = newWorkExpArr;
    setState(newState);
  };
  let handleChangeEdu = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newEduArr = [...state.educationArr];
    let inputName = e.target.dataset.inputname;
    let newState = { ...state };

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
    newState.educationArr = newEduArr;
    setState(newState);
  };

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

export default App;

import './App.css';
import { Component } from 'react';
import Page from './components/Page';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    this.addAnotherEducation = this.addAnotherEducation.bind(this);

    let educationTestUnit = [];
    let workExpTestUnit = [];
    educationTestUnit[0] = {
      id: uniqid(),
      courseProgram: 'Test course',
      university: 'Test university',
      startDate: 'Test start date',
      endDate: 'Test end date',
      description: 'Test description',
    };
    educationTestUnit[1] = {
      id: uniqid(),
      courseProgram: 'Test course1',
      university: 'Test university1',
      startDate: 'Test start date1',
      endDate: 'Test end date1',
      description: 'Test description1',
    };
    workExpTestUnit[0] = {
      id: uniqid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.state = {
      personalDetails: {
        id: uniqid(),
        name: '',
        title: '',
        phone: 0,
        email: '',
        location: '',
        description: '',
      },
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
      workExperienceArr: [],
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

      educationArr: [],
    };
  }
  getEmptyEducationSample = () => {
    const emptyEduArr = { ...this.state.educationEmptySample };
    emptyEduArr.id = uniqid();
    return emptyEduArr;
  };
  getEmptyWorkExpSample = () => {
    const emptyWorkExpArr = { ...this.state.workExperienceEmptySample };
    emptyWorkExpArr.id = uniqid();
    return emptyWorkExpArr;
  };

  addAnotherEducation = () => {
    const eduArrToConcat = this.getEmptyEducationSample();
    let newArray = this.state.educationArr.concat(eduArrToConcat);
    this.setState({
      educationArr: newArray,
    });
  };
  addAnotherWorkExp = () => {
    const workExpArrToConcat = this.getEmptyWorkExpSample();
    let newArray = this.state.workExperienceArr.concat(workExpArrToConcat);
    this.setState({
      workExperienceArr: newArray,
    });
  };
  handleChangeEdu = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newEduArr = [...this.state.educationArr];
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
    this.setState({
      educationArr: newEduArr,
    });
  };
  handleChangeWorkExp = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newWorkExpArr = [...this.state.workExperienceArr];
    let inputName = e.target.dataset.inputname;
    console.log({ arrIndex, value, newWorkExpArr, inputName });
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
    console.log('ss');
    this.setState({
      workExperienceArr: newWorkExpArr,
    });
  };

  render() {
    return (
      <div className="App">
        <Page
          state={this.state}
          addAnotherEducation={this.addAnotherEducation}
          addAnotherWorkExp={this.addAnotherWorkExp}
          handleChangeEdu={this.handleChangeEdu}
          handleChangeWorkExp={this.handleChangeWorkExp}
        />
      </div>
    );
  }
}

export default App;

import './App.css';
import { Component } from 'react';
import Page from './components/Page';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    this.addAnotherEducation = this.addAnotherEducation.bind(this);

    let educationTestUnit = [];
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

      educationArr: educationTestUnit,
    };
  }
  getEmptyEducationSample = () => {
    const emptyEduArr = { ...this.state.educationEmptySample };
    emptyEduArr.id = uniqid();
    return emptyEduArr;
  };
  addAnotherEducation = () => {
    const eduArrToConcat = this.getEmptyEducationSample();
    let newArray = this.state.educationArr.concat(eduArrToConcat);
    this.setState({
      educationArr: newArray,
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

  render() {
    return (
      <div className="App">
        <Page
          state={this.state}
          addAnotherEducation={this.addAnotherEducation}
          handleChangeEdu={this.handleChangeEdu}
        />
      </div>
    );
  }
}

export default App;

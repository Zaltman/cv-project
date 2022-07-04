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

    this.state = {
      isActive: true,
      personalDetails: personDetailsTest,
      // {
      //   id: uniqid(),
      //   name: '',
      //   phone: '',
      //   email: '',
      //   location: '',
      //   description: '',
      // },
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
    };
  }
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state.isActive);
  };
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
  handleChangePersonal = (e) => {
    let value = e.target.value;
    let newPersObj = this.state.personalDetails;
    let inputName = e.target.dataset.inputname;
    console.log(this.state.personalDetails);
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
    this.setState({
      personalDetails: newPersObj,
    });
  };

  handleChangeWorkExp = (e) => {
    let arrIndex = e.target.parentElement.dataset.index;
    let value = e.target.value;
    let newWorkExpArr = [...this.state.workExperienceArr];
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
    this.setState({
      workExperienceArr: newWorkExpArr,
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
          handleToggle={this.handleToggle}
          addAnotherEducation={this.addAnotherEducation}
          addAnotherWorkExp={this.addAnotherWorkExp}
          handleChangePersonal={this.handleChangePersonal}
          handleChangeEdu={this.handleChangeEdu}
          handleChangeWorkExp={this.handleChangeWorkExp}
        />
      </div>
    );
  }
}

export default App;

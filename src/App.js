import './App.css';
import { Component } from 'react';
import Page from './components/Page';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    let educationTestUnit = [];
    educationTestUnit[0] = {
      id: uniqid(),
      courseProgram: 'Test course',
      university: 'Test university',
      startDate: 'Test start date',
      endDate: 'Test end date',
      description: 'Test description',
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
      educationArr: educationTestUnit,
    };
  }

  render() {
    const dataObj = this.state;
    return (
      <div className="App">
        <Page dataObj={dataObj} />
      </div>
    );
  }
}

export default App;

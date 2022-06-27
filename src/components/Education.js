import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.addAnotherEducation = this.addAnotherEducation.bind(this);
  }

  addAnotherEducation = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    const { educationObj } = this.props;
    console.log(educationObj);
    return (
      <div key={educationObj.id}>
        <form className={'educationContainer inputContainer'}>
          <div id="educationContainerTitle">Education</div>
          <input
            placeholder="Course / Program"
            value={educationObj.courseProgram}
          ></input>
          <input
            placeholder="University"
            value={educationObj.university}
          ></input>
          <input
            placeholder="Start Date"
            value={educationObj.startDate}
          ></input>
          <input placeholder="End Date" value={educationObj.endDate}></input>
          <input
            placeholder="Description"
            value={educationObj.description}
          ></input>
          <button onClick={this.addAnotherEducation}>Add another</button>
        </form>
      </div>
    );
  }
}

export default Education;

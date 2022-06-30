import React, { Component } from 'react';

class Education extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // this.addAnotherEducation = this.addAnotherEducation.bind(this);

  render() {
    const { educationObj, handleChangeEdu, index } = this.props;
    // console.log(educationObj);

    return (
      <div>
        <form
          className={'educationContainer inputContainer'}
          data-index={index}
        >
          <div id="educationContainerTitle">Education</div>
          <input
            data-inputname={'courseProgram'}
            placeholder="Course / Program"
            onChange={handleChangeEdu}
            value={educationObj.courseProgram}
          ></input>
          <input
            data-inputname={'university'}
            placeholder="University"
            onChange={handleChangeEdu}
            value={educationObj.university}
          ></input>
          <input
            data-inputname={'startDate'}
            placeholder="Start Date"
            onChange={handleChangeEdu}
            value={educationObj.startDate}
          ></input>
          <input
            data-inputname={'endDate'}
            onChange={handleChangeEdu}
            placeholder="End Date"
            value={educationObj.endDate}
          ></input>
          <input
            data-inputname={'description'}
            onChange={handleChangeEdu}
            placeholder="Description"
            value={educationObj.description}
          ></input>
        </form>
      </div>
    );
  }
}

export default Education;

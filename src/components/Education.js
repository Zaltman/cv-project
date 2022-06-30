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
          data-dataidentify={2}
        >
          <div id="educationContainerTitle">Education</div>
          <input
            data-inputname={'courseProgram'}
            placeholder="Course / Program"
            onChange={handleChangeEdu}
            defaultValue={educationObj.courseProgram}
          ></input>
          <input
            data-inputname={'university'}
            placeholder="University"
            // defaultValue={educationObj.university}
            onChange={handleChangeEdu}
            value={educationObj.university}
          ></input>
          <input
            data-inputname={'startDate'}
            placeholder="Start Date"
            onChange={handleChangeEdu}
            defaultValue={educationObj.startDate}
          ></input>
          <input
            data-inputname={'endDate'}
            onChange={handleChangeEdu}
            placeholder="End Date"
            defaultValue={educationObj.endDate}
          ></input>
          <input
            data-inputname={'description'}
            onChange={handleChangeEdu}
            placeholder="Description"
            defaultValue={educationObj.description}
          ></input>
        </form>
      </div>
    );
  }
}

export default Education;

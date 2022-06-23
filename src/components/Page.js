// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Cv from './Cv';
import Education from './Education';
import PersonalDetails from './PersonalDetails';
import WorkExp from './WorkExp';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dataObj = this.props.dataObj;
    // const dataObj = this.props;
    return (
      <div>
        <PersonalDetails />
        <WorkExp />
        {/* {console.log(dataObj)} */}
        {dataObj.educationArr.map((educationObj, index) => {
          // console.log(educationObj);
          return (
            <Education educationObj={educationObj} key={educationObj.id} />
          );
        })}

        <Cv />
      </div>
    );
  }
}
export default Page;

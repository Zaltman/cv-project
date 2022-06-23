import { Component } from 'react';

class WorkExp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className={'WorkContainer inputContainer'}>
          <div id="WorkContainerTitle">Work experience</div>
          <input placeholder="Company"></input>
          <input placeholder="Position"></input>
          <input placeholder="Start Date"></input>
          <input placeholder="End Date"></input>
          <input placeholder="Description"></input>
          {/* <button>Add another</button> */}
        </form>
      </div>
    );
  }
}

export default WorkExp;

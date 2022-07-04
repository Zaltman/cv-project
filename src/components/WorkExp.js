import { Component } from 'react';

class WorkExp extends Component {
  render() {
    const { handleChangeWorkExp, workExpObj, index } = this.props;
    return (
      <div>
        <form className={'WorkContainer inputContainer'} data-index={index}>
          <div id="WorkContainerTitle">Work experience</div>
          <input
            data-inputname={'company'}
            onChange={handleChangeWorkExp}
            value={workExpObj.company}
            placeholder="Company"
          ></input>
          <input
            placeholder="Position"
            data-inputname={'position'}
            onChange={handleChangeWorkExp}
            value={workExpObj.position}
          ></input>
          <input
            placeholder="Start Date"
            data-inputname={'startDate'}
            onChange={handleChangeWorkExp}
            value={workExpObj.startDate}
          ></input>
          <input
            placeholder="End Date"
            data-inputname={'endDate'}
            onChange={handleChangeWorkExp}
            value={workExpObj.endDate}
          ></input>
          <input
            placeholder="Description"
            data-inputname={'description'}
            onChange={handleChangeWorkExp}
            value={workExpObj.description}
          ></input>
          {/* <button>Add another</button> */}
        </form>
      </div>
    );
  }
}

export default WorkExp;

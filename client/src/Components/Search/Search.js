import React from 'react';
import './Search.css';

const Search = props => (
    <form>
    <div className="form-group">
      <label htmlFor="topic">Topic</label>
      <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="start-year">Start Year</label>
      <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" />
    </div>
    <div className="form-group">
      <label htmlFor="end-year">End Year</label>
      <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" />
    </div>
    <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
  </form>

)

export default Search;

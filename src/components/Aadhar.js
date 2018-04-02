import React, { Component } from 'react';

class Aadhar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: 'Female',
      dob: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">{'First name'}</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">{'Last name'}</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender"> {'Gender'} </label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            className="form-control"
          >
            <option>{'Male'}</option>
            <option>{'Female'}</option>
            <option>{'Other'}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender"> {'Date'} </label>
          <input
            id="dob"
            type="date"
            value={this.state.dob}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-default ">
          {'Submit'}
        </button>
      </form>
    );
  }
}

export default Aadhar;

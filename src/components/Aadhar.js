import React, { Component } from 'react';

class Aadhar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: 'Female',
      dob: '',
      address: '',
      email: '',
      phone: '',
      poa: 'Passport',
      poi: 'Passport',
      relatedTo: 'Father',
      relativeName: ''
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3 className="mb-3 text-center mt-3">{'Aadhar Form'}</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <h5 className="col-md-12 mb-3 text-info">
                  {'Personal details'}
                </h5>
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
                  <label htmlFor="dob"> {'Date of birth'} </label>
                  <input
                    id="dob"
                    type="date"
                    value={this.state.dob}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row">
                <h5 className="col-md-12 mb-3 text-info">
                  {'Contact details'}
                </h5>
                <div className="col-md-12 mb-3">
                  <label htmlFor="Address"> {'Address'} </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Your full address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="Email"> {'Email address'} </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="Phone"> {'Phone'} </label>
                  <input
                    id="phone"
                    type="string"
                    value={this.state.phone}
                    placeholder="Your phone number"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row ">
                <h5 className="col-md-12 mb-3 text-info">
                  {'Document proofs'}
                </h5>
                <div className="col-md-6 mb-3">
                  <label htmlFor="poa"> {'Proof of address'} </label>
                  <select
                    id="poa"
                    value={this.state.poa}
                    onChange={this.handleChange}
                    className="form-control"
                  >
                    <option>{'Passport'}</option>
                    <option>{'PAN'}</option>
                    <option>{'Voter ID'}</option>
                    <option>{'Driving License'}</option>
                    <option>{'Passbook'}</option>
                    <option>{'Electricity Bill'}</option>
                    <option>{'Phone Bill'}</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="poi"> {'Proof of Identity'} </label>
                  <select
                    id="poi"
                    value={this.state.poi}
                    onChange={this.handleChange}
                    className="form-control"
                  >
                    <option>{'Passport'}</option>
                    <option>{'PAN'}</option>
                    <option>{'Voter ID'}</option>
                    <option>{'Driving License'}</option>
                    <option>{'Passbook'}</option>
                    <option>{'Electricity Bill'}</option>
                    <option>{'Phone Bill'}</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <h5 className={'text-info col-md-12 mb-3'}>
                  {'Relative details'}
                </h5>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="relatedTo"> {'Relation'} </label>
                    <select
                      id="relatedTo"
                      value={this.state.relatedTo}
                      onChange={this.handleChange}
                      className="form-control"
                    >
                      <option>{'Father'}</option>
                      <option>{'Mother'}</option>
                      <option>{'Guardian'}</option>
                      <option>{'Spouse'}</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="relativeName"> {'Relative name'} </label>
                    <input
                      id="relativeName"
                      type="string"
                      value={this.state.relativeName}
                      placeholder="Name of your relative"
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-default mb-3 mt-3 ">
                {'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Aadhar;

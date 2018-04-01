import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              {'Email'}
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleEmailChange}
                className="form-control"
              />
            </label>
            <div className="form-group">
              <label htmlFor="password">
                {'Password'}
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePassChange}
                  className="form-control"
                />
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">
              {'Confirm password'}
              <input
                name="confirmpassword"
                type="password"
                placeholder="Confirm password"
                onChange={this.handlePassChange}
                className="form-control"
              />
            </label>
          </div>
          <input type="submit" className="btn btn-default" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Signup;

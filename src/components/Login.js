import React, { Component } from 'react';

class Login extends Component {
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
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">{'Email'}</label>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"> {'Password'}</label>

                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    className="form-control"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-default"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

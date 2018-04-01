import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="container">
      <Navbar />
      <h2>{'Formee'}</h2>
      <Add />
      <Documents />
      <Footer />
    </div>;
  }
}

export default Home;

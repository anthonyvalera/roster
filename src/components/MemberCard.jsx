import React, { Component } from 'react';

export default class MemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { info } = this.props;
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div id='member-card'>
=======
      <div>
        <h1>MemberCard</h1>
>>>>>>> Bare bones landing page functionalit #4
=======
      <div id='member-card'>
>>>>>>> Landing component get necessary data and built before member remote method for additional security
        <img src={info.avatar} />
        <h2>{info.name}</h2>
        <h3>{info.headline}</h3>
      </div>
    );
  }
}
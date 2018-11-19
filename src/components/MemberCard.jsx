import React, { Component } from 'react';

export default class MemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { info } = this.props;
    return (
      <div>
        <h1>MemberCard</h1>
        <img src={info.avatar} />
        <h2>{info.name}</h2>
        <h3>{info.headline}</h3>
      </div>
    );
  }
}
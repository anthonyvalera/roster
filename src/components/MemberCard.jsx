import React, { Component } from 'react';

export default class MemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { memberInfo, memberTags } = this.props;
    return (
      <div id='member-card'>
        <img src={memberInfo.avatar} />
        <h2>{memberInfo.name}</h2>
        <h3>{memberInfo.headline}</h3>
        {memberTags.map((tag, index) => (
          <button key={index}>{tag.name}</button>
        ))}
      </div>
    );
  }
}
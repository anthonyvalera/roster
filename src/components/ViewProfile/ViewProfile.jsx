import React, { Component } from 'react';
import { closeProfile } from '../../pages/Home/actions';

export default class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(closeProfile());
  }

  render() {
    const { member, tags } = this.props;
    return (
      <div>
        <img src={member.avatar} />
        <h2>{member.firstName + ' ' + member.lastName}</h2>
        <h3>{member.headline}</h3>
        <p>{member.bio}</p>
        <h3>Connect with {member.firstName}</h3>
        {member.email && <p>{member.email}</p>}
        {member.website && <a href={member.website}>Website</a>}
        {member.linkedin && <a href={member.linkedIn}>LinkedIn</a>}
        {member.facebook && <a href={member.facebook}>Facebook</a>}
        {member.twitter && <a href={member.twitter}>Twitter</a>}
        {member.tagIds !== [] && tags.filter(tag => member.tagIds.includes(tag.id)).map((tag, index) => (
          <button key={index}>{tag.name}</button>
        ))}
        <button onClick={this.handleClose}>Close Profile</button>
      </div>
    );
  }
}
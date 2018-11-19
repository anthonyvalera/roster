import React, { Component } from 'react';
import { getTags, getMembers } from './actions';
import Nav from '../../components/Navigation';
import MemberCard from '../../components/MemberCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
    dispatch(getMembers());
  }

  render() {
    const { members } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <Nav />
        {members.map(member => (
          <MemberCard key={'card-' + members.indexOf(member)} info={member} />
        ))}
      </div>
    );
  }
}
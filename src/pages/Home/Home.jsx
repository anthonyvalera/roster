import React, { Component } from 'react';
import { getTags, getMembers } from './actions';
import Nav from '../../components/Navigation';
import MemberCard from '../../components/MemberCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

<<<<<<< HEAD
<<<<<<< HEAD
  componentDidMount() {
=======
  componentWillMount() {
>>>>>>> Bare bones landing page functionalit #4
=======
  componentDidMount() {
>>>>>>> Landing component get necessary data and built before member remote method for additional security
    const { dispatch } = this.props;
    dispatch(getTags());
    dispatch(getMembers());
  }

  render() {
    const { members } = this.props;
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <Nav />
        <div id='roster-cards'>
          {
            members.map(member => (
              <MemberCard key={'card-' + members.indexOf(member)} info={member} />
            ))
          }
        </div>
=======
        <h1>Home</h1>
        <Nav />
        {members.map(member => (
          <MemberCard key={'card-' + members.indexOf(member)} info={member} />
        ))}
>>>>>>> Bare bones landing page functionalit #4
=======
        <Nav />
        <div id='roster-cards'>
          {
            members.map(member => (
              <MemberCard key={'card-' + members.indexOf(member)} info={member} />
            ))
          }
        </div>
>>>>>>> Landing component get necessary data and built before member remote method for additional security
      </div>
    );
  }
}
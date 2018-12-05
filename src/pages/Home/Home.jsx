import React, { Component } from 'react';
import { getTags, getMembers } from './actions';
import Nav from '../../components/Navigation';
import MemberCard from '../../components/MemberCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
    dispatch(getMembers());
  }

  render() {
    const { members, tags } = this.props;
    return (
      <div>
        <Nav />
        <div id='roster-cards'>
          {
            members.map((member, index) => (
              <MemberCard key={'card-' + index} memberInfo={member} memberTags={tags.filter(tag => member.tags.includes(tag.id))} />
            ))
          }
        </div>
      </div>
    );
  }
}
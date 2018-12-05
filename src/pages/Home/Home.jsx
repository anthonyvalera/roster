import React, { Component } from 'react';
import { getTags, getMembers, getSelectedMember } from './actions';
import Nav from '../../components/Navigation';
import Profile from '../../components/ViewProfile';
import MemberCard from '../../components/MemberCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.viewProfile = this.viewProfile.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
    dispatch(getMembers());
  }

  viewProfile(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const id = event.currentTarget.getAttribute('name');
    dispatch(getSelectedMember(id));
  }

  render() {
    const { members, tags, selectedMember } = this.props;
    return (
      <div>
        <Nav />
        {selectedMember !== null &&
          <Profile />
        }
        <div id='roster-cards'>
        {
          members.map((member, index) => (
            <div key={'card-' + index} name={member.id} onClick={this.viewProfile}>
              <MemberCard memberInfo={member} memberTags={tags.filter(tag => member.tagIds.includes(tag.id))} />
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
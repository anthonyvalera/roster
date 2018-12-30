import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Layout from '../../components/Layout';
import MemberCard from '../../components/MemberCard';
import Nav from '../../components/Navigation';
import Profile from '../../components/ViewProfile';
import { getMembers, getSelectedMember, getTags } from './actions';

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
    const { toProfile, token, members, tags, selectedMember } = this.props;
    if (toProfile && token) {
      return <Redirect push to='/profile' />;
    }
    return (
      <Layout>
        <Nav />
        {selectedMember !== null &&
          <Profile />
        }
        <div id='roster-cards'>
        {
          members.map((member, index) => (
            <div key={'card-' + index} name={member.id} onClick={this.viewProfile}>
              <MemberCard info={member} tags={tags.filter(tag => member.tagIds.includes(tag.id))} />
            </div>
          ))
        }
        </div>
      </Layout>
    );
  }
}
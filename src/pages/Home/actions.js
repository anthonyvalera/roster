import axios from 'axios';

export function getTags() {
  return {
    type: 'GET_TAGS',
    payload: axios.get('/api/tags')
    .then(({ data }) => data)
  };
}

export function getMembers() {
  return {
    type: 'GET_MEMBERS',
    payload: axios.get('/api/members?filter[where][isHidden]=false')
    .then(({ data }) => data.map(member => ({
      avatar: member.avatar,
      name: member.firstName + ' ' + member.lastName,
      headline: member.headline,
      tagIds: member.tagIds,
      id: member.id
    })))
  };
}


export function getSelectedMember(id) {
  return {
    type: 'GET_SELECTED_MEMBER',
    payload: axios.get('/api/members/' + id)
    .then(({ data }) => ({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.publicEmail,
      headline: data.deadline,
      bio: data.bio,
      avatar: data.avatar,
      website: data.website,
      linkedIn: data.linkedIn,
      facebook: data.facebook,
      twitter: data.twitter,
      tagIds: data.tagIds
    }))
  };
}

export function closeProfile() {
  return {
    type: 'CLOSE_PROFILE',
    payload: null
  };
}

export function loggingIn(value) {
  return {
    type: 'LOGGING_IN',
    payload: value
  };
}

export function goToProfile(value) {
  return {
    type: 'GO_TO_PROFILE',
    payload: value
  };
}
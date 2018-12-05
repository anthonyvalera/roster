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
      tags: member.tagIds
    })))
  };
}
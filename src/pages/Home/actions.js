import axios from 'axios';

export function getTags() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Landing component get necessary data and built before member remote method for additional security
  return {
    type: 'GET_TAGS',
    payload: axios.get('/api/tags')
    .then(({ data }) => data)
  };
<<<<<<< HEAD
}

export function getMembers() {
  return {
    type: 'GET_MEMBERS',
    payload: axios.get('/api/members?filter[where][isHidden]=false')
    .then(({ data }) => data.map(member => ({
      avatar: member.avatar,
      name: member.firstName + ' ' + member.lastName,
      headline: member.headline
    })))
  };
=======
    return {
        type: 'GET_TAGS',
        payload: axios.get('/api/tags')
            .then(({ data }) => data)
    }
}

export function getMembers() {
    return {
        type: 'GET_MEMBERS',
        payload: axios.get('/api/members?filter[where][isHidden]=false')
            .then(({ data }) => data.map(member => ({
                avatar: member.avatar,
                name: member.firstName + ' ' + member.lastName,
                headline: member.headline
            })))
    }
>>>>>>> Bare bones landing page functionalit #4
=======
}

export function getMembers() {
  return {
    type: 'GET_MEMBERS',
    payload: axios.get('/api/members?filter[where][isHidden]=false')
    .then(({ data }) => data.map(member => ({
      avatar: member.avatar,
      name: member.firstName + ' ' + member.lastName,
      headline: member.headline
    })))
  };
>>>>>>> Landing component get necessary data and built before member remote method for additional security
}
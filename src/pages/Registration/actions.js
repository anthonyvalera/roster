import axios from 'axios';

// Actions
export function getTags() {
  return {
    type: 'GET_TAGS',
    payload: axios.get('/api/tags')
      .then(response => {
        return response.data;
      })
  };    
}

export const addInput = (name, value) => {
  return {
    type: 'ADD_INPUT',
    payload: {
      [name]: value
    }
  };
};

export const addTag = (name, value) => {
  return {
    type: 'ADD_TAG',
    payload: {
      name,
      value
    }
  };
};

export const addMember = ( newMember ) =>
  ({
    type: 'ADD_MEMBER',
    payload: axios.post('/api/members', {
      firstName: newMember.firstName,
      lastName: newMember.lastName,
      email: newMember.accountEmail,
      password: newMember.password,
      verifyPassword: newMember.verifyPassword,
      headline: newMember.headline,
      bio: newMember.shortBio,
      avatar: newMember.avatar,
      publicEmail: newMember.publicEmail,
      website: newMember.website,
      linkedIn: newMember.linkedIn,
      facebook: newMember.facebook,
      twitter: newMember.twitter,
      tagIds: newMember.tagIds
    })
  });
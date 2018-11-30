import axios from 'axios';

// Actions
export function getMember() {
  return {
    type: 'GET_MEMBER',
    payload: axios.get('/api/members/5c005d7e3e9d7c463a16e60f')
      .then(response => {
        return response.data;
      })
  };    
}

export const editInput = (name, value) => {
  return {
    type: 'EDIT_INPUT',
    payload: {
      [name]: value
    }
  };
};

export const editTag = (name, value) => {
  return {
    type: 'EDIT_TAG',
    payload: {
      name,
      value,
    }
  };
};

export const editMember = ( getMember ) =>
  ({
    type: 'EDIT_MEMBER',
    payload: axios.patch('/api/members/5c005d7e3e9d7c463a16e60f', {
      firstName: getMember.firstName,
      lastName: getMember.lastName,
      email: getMember.email,
      verifyPassword: getMember.verifyPassword,
      headline: getMember.headline,
      bio: getMember.bio,
      avatar: getMember.avatar,
      publicEmail: getMember.publicEmail,
      website: getMember.website,
      linkedIn: getMember.linkedIn,
      facebook: getMember.facebook,
      twitter: getMember.twitter,
      tagIds: getMember.tagIds
    })
    .then(response => {
      return response.data;
    })
  });

  export const showHideMember = ( getMember ) =>
  ({
    type: 'SHOWHIDE_MEMBER',
    payload: axios.patch('/api/members/5c005d7e3e9d7c463a16e60f', {
      isHidden: getMember.isHidden
    })
  });

  
export function deleteMember(id) {
  return {
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${id.id}`)
      .then(response => {
        return response.data;
      })
  };
}
/*
export const deleteMember = (id) =>
  ({
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${id.id}`)
      .then(response => {
        return response.data;
      })
  });
*/